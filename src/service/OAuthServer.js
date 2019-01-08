const ClientDao  = require('../dao/Client');
const OAuthTokenDao = require('../dao/OAuthToken');
const UserDao = require('../dao/User');
const clientDao = new ClientDao();
const oAuthTokenDao = new OAuthTokenDao();
const userDao = new UserDao();

class OAuthServer {
  getAccessToken(bearerToken, getAccessTokenCB) {
    oAuthTokenDao.getAccessToken(bearerToken, (accessTokenErr, token) => {
      if (accessTokenErr) {
        return getAccessTokenCB(accessTokenErr);
      }
      return getAccessTokenCB(null, {
        accessToken: token.accessToken,
        accessTokenExpiresAt: token.accessTokenExpiresOn,
        client: {
          id: token.clientId
        },
        user: {
          id: token.userId
        }
      });
    });
  }
  getClient(clientId, clientSecret, getClientCB) {
    clientDao.getClient(clientId, (clientErr, client) => {
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
  saveToken(token, client, user, saveTokenCB) {
    const accessToken = {
      accessToken: token.accessToken,
      accessTokenExpiresOn: token.accessTokenExpiresAt,
      refreshToken: token.refreshToken,
      refreshTokenExpiresOn: token.refreshTokenExpiresAt,
      clientId: token.client.id,
      userId: token.user.id
    };
    oAuthTokenDao.saveToken(accessToken, (saveErr, saveToken) => {
      if (saveErr) {
        return saveTokenCB(saveErr);
      }
      return saveTokenCB(null, saveToken);
    });
  }
  saveAuthorizationCode(code, client, user, saveAuthCB) {
    return saveAuthCB(null, {
      authorizationCode: code
    });
  }
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
