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
      if (!token) {
        return getTokenCB(Error('Accesstoken not found'));
      }
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
        'refreshTokenExpiresAt',
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
    });
  }
  /**
   * Dao to delete AccessToken based on refreshToken
   * @param  {Object} token
   * @param  {Function} deleteCB
   */
  deleteAccessToken(token, deleteCB) {
    models.OAuthToken.destroy({
      where: {
        refreshToken: token.refreshToken,
        clientId: token.client.id,
        userId: token.user.id
      }
    }).then((token) => {
      if (!token) {
        return deleteCB(null, false);
      }
      return deleteCB(null, true);
    }, (deleteErr) => {
      return deleteCB(deleteErr);
    });
  }
}

module.exports = OAuthTokenDao;
