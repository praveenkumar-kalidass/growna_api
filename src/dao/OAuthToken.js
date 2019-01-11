/**
 * Dao to fetch OAuth token
 *
 * @exports {Class} OAuthTokenDao
 */
const models = require('../models');

/**
 * OAuthTokenDao class
 *
 * @method {public} getAccessToken
 * @method {public} getRefreshToken
 * @method {public} saveAccessToken
 */
class OAuthTokenDao {
  /**
   * Method to get AccessToken
   *
   * @param  {String} bearerToken
   * @param  {Function} getTokenCB
   */
  getAccessToken(bearerToken, getTokenCB) {
    models.OAuthToken.find({
      attributes: [
        'accessToken',
        'accessTokenExpiresAt',
        'clientId',
        'userId'
      ],
      where: {
        accessToken: bearerToken
      }
    }).then((token) => {
      return getTokenCB(null, token);
    }, (getError) => {
      return getTokenCB(getError);
    });
  }
  /**
   * Method to get refresh token
   *
   * @param  {String} bearerToken
   * @param  {Function} getTokenCB
   */
  getRefreshToken(bearerToken, getTokenCB) {
    models.OAuthToken.find({
      attributes: [
        'refreshToken',
        'refreshTokenExpiresOn',
        'clientId',
        'userId'
      ],
      where: {
        refreshToken: bearerToken
      }
    }).then((token) => {
      return getTokenCB(null, token);
    }, (getError) => {
      return getTokenCB(getError);
    });
  }
  /**
   * Method to save access token
   *
   * @param  {Object} token
   * @param  {Function} saveTokenCB
   */
  saveAccessToken(token, saveTokenCB) {
    models.OAuthToken.create(token).then((accessToken) => {
      return saveTokenCB(null, accessToken);
    }, (createErr) => {
      return saveTokenCB(createErr);
    })
  }
}

module.exports = OAuthTokenDao;
