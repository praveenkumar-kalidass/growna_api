/**
 * Service to process functions with OAuthToken data
 *
 * @exports {Class} OAuthTokenService
 */
const OAuthTokenDao = require('../dao/OAuthToken');
const oAuthTokenDao = new OAuthTokenDao();
const constant = require('../utils/constant');

/**
 * OAuthToken Service class
 *
 * @method {public} getAccessToken
 * @method {public} getClient
 * @method {public} saveToken
 * @method {public} revokeToken
 */
class OAuthTokenService {
  /**
   * Method to get accesstoken for OAuth
   *
   * @param  {String} bearerToken
   * @param  {Function} getAccessTokenCB
   */
  getAccessToken(bearerToken, getAccessTokenCB) {
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
  }
  /**
   * Method to get refreshtoken for OAuth
   *
   * @param  {String} bearerToken
   * @param  {Function} getRefreshTokenCB
   */
  getRefreshToken(bearerToken, getRefreshTokenCB) {
    oAuthTokenDao.getRefreshToken(bearerToken, (refreshTokenErr, token) => {
      if (refreshTokenErr) {
        return getRefreshTokenCB(refreshTokenErr);
      }
      return getRefreshTokenCB(null, {
        refreshToken: token.refreshToken,
        refreshTokenExpiresAt: token.refreshTokenExpiresAt,
        client: {
          id: token.clientId
        },
        user: {
          id: token.userId
        },
        scope: token.scope
      });
    });
  }
  /**
   * Method to save accesstoken from OAuth
   *
   * @param  {String} token
   * @param  {Object} client
   * @param  {Object} user
   * @param  {Function} saveTokenCB
   */
  saveToken(token, client, user, saveTokenCB) {
    token.clientId = client.id;
    token.userId = user.id;
    let scope = constant.USER;
    if (user.role.name === constant.GIS_ADMIN ||
      user.role.name === constant.GIS_SUPER_ADMIN) {
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
  }
  /**
   * Method to revoke token from OAuth
   *
   * @param  {Object} token
   * @param  {Function} revokeCB
   */
  revokeToken(token, revokeCB) {
    oAuthTokenDao.deleteAccessToken(token, (deleteErr, isDeleted) => {
      if (deleteErr) {
        return revokeCB(deleteErr);
      }
      return revokeCB(null, isDeleted);
    });
  }
}

module.exports = OAuthTokenService;
