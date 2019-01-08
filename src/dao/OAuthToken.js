const models = require('../models');

class OAuthTokenDao {
  getAccessToken(bearerToken, getTokenCB) {
    models.OAuthToken.find({
      attributes: [
        'accessToken',
        'accessTokenExpiresOn',
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
  saveAccessToken(token, saveTokenCB) {
    models.OAuthToken.create(token).then((accessToken) => {
      return saveTokenCB(null, accessToken);
    }, (createErr) => {
      return saveTokenCB(createErr);
    })
  }
}

module.exports = OAuthTokenDao;
