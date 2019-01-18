/**
 * Service to implement OAuth Server functions
 *
 * @exports {Class} OAuthServer
 */
const ClientDao  = require('../dao/Client');
const OAuthTokenDao = require('../dao/OAuthToken');
const UserDao = require('../dao/User');
const clientDao = new ClientDao();
const oAuthTokenDao = new OAuthTokenDao();
const userDao = new UserDao();

/**
 * OAuthServer class
 *
 * @method {public} getAccessToken
 * @method {public} getClient
 * @method {public} getRefreshToken
 * @method {public} saveAccessToken
 * @method {public} saveAuthorizationCode
 * @method {public} getUser
 */
class OAuthServer {
  /**
   * OAuth Service to get Access token
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
        }
      });
    });
  }
  /**
   * OAuth Service to get client details
   *
   * @param  {String} clientId
   * @param  {String} clientSecret
   * @param  {Function} getClientCB
   */
  getClient(clientId, clientSecret, getClientCB) {
    clientDao.getClient(clientId, clientSecret, (clientErr, client) => {
      if (clientErr) {
        return getClientCB(clientErr);
      }
      return getClientCB(null, {
        id: client.id,
        grants: ['password', 'authorization_code'],
        redirectUris: [client.redirectUri]
      });
    });
  }
  /**
   * OAuth Service to get refresh token
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
        refreshTokenExpiresAt: token.refreshTokenExpiresOn,
        client: {
          id: token.clientId
        },
        user: {
          id: token.userId
        }
      });
    });
  }
  /**
   * OAuth Service to save access token
   *
   * @param  {String} token
   * @param  {Object} client
   * @param  {Object} user
   * @param  {Function} saveTokenCB
   */
  saveToken(token, client, user, saveTokenCB) {
    token.clientId = client.id;
    token.userId = user.id;
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
   * OAuth Service to save authorization code
   * @param  {String} code
   * @param  {Object} client
   * @param  {Object} user
   * @param  {Function} saveAuthCB
   */
  saveAuthorizationCode(code, client, user, saveAuthCB) {
    return saveAuthCB(null, code);
  }
  /**
   * OAuth Service to get user details
   *
   * @param  {String} email
   * @param  {String} password
   * @param  {Function} getUserCB
   */
  getUser(email, password, getUserCB) {
    userDao.getUserByCredentials(email, password, (getErr, user) => {
      if (getErr) {
        return getUserCB(getErr);
      }
      return getUserCB(null, user);
    });
  }
}

module.exports = OAuthServer;
