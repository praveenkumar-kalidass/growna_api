/**
 * Service to implement OAuth Server functions
 *
 * @exports {Class} OAuthServer
 */
const ClientService  = require('../service/Client');
const OAuthTokenService = require('../service/OAuthToken');
const OAuthScopeService = require('../service/OAuthScope');
const UserService = require('../service/User');
const clientService = new ClientService();
const oAuthTokenService = new OAuthTokenService();
const oAuthScopeService = new OAuthScopeService();
const userService = new UserService();

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
    oAuthTokenService.getAccessToken(bearerToken, (accessTokenErr, token) => {
      if (accessTokenErr) {
        return getAccessTokenCB(accessTokenErr);
      }
      return getAccessTokenCB(null, token);
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
    clientService.getClient(clientId, clientSecret, (clientErr, client) => {
      if (clientErr) {
        return getClientCB(clientErr);
      }
      return getClientCB(null, client);
    });
  }
  /**
   * OAuth Service to get refresh token
   *
   * @param  {String} bearerToken
   * @param  {Function} getRefreshTokenCB
   */
  getRefreshToken(bearerToken, getRefreshTokenCB) {
    oAuthTokenService.getRefreshToken(bearerToken, (refreshTokenErr, token) => {
      if (refreshTokenErr) {
        return getRefreshTokenCB(refreshTokenErr);
      }
      return getRefreshTokenCB(null, token);
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
    oAuthTokenService.saveToken(token, client, user, (saveErr, saveToken) => {
      if (saveErr) {
        return saveTokenCB(saveErr);
      }
      return saveTokenCB(null, saveToken);
    });
  }
  /**
   * OAuth Service to revoke the expired accesstoken
   * @param  {Object} token
   * @param  {Function} revokeCB
   */
  revokeToken(token, revokeCB) {
    oAuthTokenService.revokeToken(token, (deleteErr, isDeleted) => {
      if (deleteErr) {
        return revokeCB(deleteErr);
      }
      return revokeCB(null, isDeleted);
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
    userService.getUser(email, password, (getErr, user) => {
      if (getErr) {
        return getUserCB(getErr);
      }
      return getUserCB(null, user);
    });
  }
  /**
   * OAuth Service to verify scope for accesstoken
   *
   * @param  {String} accessToken
   * @param  {Object} scope
   * @param  {Function} verifyCB
   */
  verifyScope(accessToken, scope, verifyCB) {
    oAuthScopeService.verifyScope(accessToken, scope, (scopeErr, valid) => {
      if (scopeErr) {
        return verifyCB(scopeErr);
      }
      return verifyCB(null, valid);
    });
  }
}

module.exports = OAuthServer;
