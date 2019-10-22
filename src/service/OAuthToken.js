/**
 * Service to process functions with OAuthToken data
 *
 * @exports {Class} OAuthTokenService
 */
const async = require('async');
const oAuthTokenDao = require('../dao/OAuthToken');
const userService = require('../service/User');
const constant = require('../utils/constant');

/**
 * OAuthToken Service class
 *
 * @method {public} getAccessToken
 * @method {public} getClient
 * @method {public} saveToken
 * @method {public} revokeToken
 */
let OAuthTokenService = {};

/**
 * Method to get accesstoken for OAuth
 *
 * @param  {String} bearerToken
 * @param  {Function} getAccessTokenCB
 */
OAuthTokenService.getAccessToken = (bearerToken, getAccessTokenCB) => {
  oAuthTokenDao.getAccessToken(bearerToken, (accessTokenErr, token) => {
    if (accessTokenErr) {
      return getAccessTokenCB(accessTokenErr);
    }
    return getAccessTokenCB(null, {
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt,
      client: {
        id: token.clientId
      },
      user: {
        id: token.userId
      },
      scope: token.scope
    });
  });
};

/**
 * Method to get refreshtoken for OAuth
 *
 * @param  {String} bearerToken
 * @param  {Function} getRefreshTokenCB
 */
OAuthTokenService.getRefreshToken = (bearerToken, getRefreshTokenCB) => {
  let accessToken = {};
  async.waterfall([
    async.apply(oAuthTokenDao.getRefreshToken, bearerToken),
    (token, passTokenCB) => {
      accessToken = {
        refreshToken: token.refreshToken,
        refreshTokenExpiresAt: token.refreshTokenExpiresAt,
        client: {
          id: token.clientId
        },
        scope: token.scope
      };
      return passTokenCB(null, token.userId);
    },
    userService.getUserDetails,
    (user, passUserCB) => {
      accessToken.user = user;
      return passUserCB(null, accessToken);
    }
  ], (waterfallErr, token) => {
    if (waterfallErr) {
      return getRefreshTokenCB(waterfallErr);
    }
    return getRefreshTokenCB(null, token);
  });
};

/**
 * Method to save accesstoken from OAuth
 *
 * @param  {String} token
 * @param  {Object} client
 * @param  {Object} user
 * @param  {Function} saveTokenCB
 */
OAuthTokenService.saveToken = (token, client, user, saveTokenCB) => {
  token.clientId = client.id;
  token.userId = user.id;
  let scope = constant.USER;
  if (user.dataValues.role.name === constant.GIS_ADMIN ||
    user.dataValues.role.name === constant.GIS_SUPER_ADMIN) {
    scope = constant.ADMIN;
  }
  token.scope = scope;
  oAuthTokenDao.saveAccessToken(token, (saveErr, saveToken) => {
    if (saveErr) {
      return saveTokenCB(saveErr);
    }
    saveToken.client = client;
    saveToken.user = user;
    return saveTokenCB(null, saveToken);
  });
};

/**
 * Method to revoke token from OAuth
 *
 * @param  {Object} token
 * @param  {Function} revokeCB
 */
OAuthTokenService.revokeToken = (token, revokeCB) => {
  oAuthTokenDao.deleteAccessToken(token, (deleteErr, isDeleted) => {
    if (deleteErr) {
      return revokeCB(deleteErr);
    }
    return revokeCB(null, isDeleted);
  });
};

module.exports = OAuthTokenService;
