const OAuthServer = require('oauth2-server');
const _ = require('lodash');
const OAuthService = require('../service/OAuthServer');
const UserService = require('../service/User');
const oAuthService = new OAuthService();
const userService = new UserService();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 */
const oAuth = new OAuthServer({
  model: oAuthService,
  allowEmptyState: true,
  requireClientAuthentication: {
    password: false
  }
});

/**
 * OAuth2.0 Server Implementation
 *
 */
class OAuth {
  /**
   * OAuth2.0 Authorization
   *
   * @param  {Object} request
   * @param  {Object} response
   */
  authorize(request, response) {
    let Request = new OAuthServer.Request(request);
    let Response = new OAuthServer.Response(request);
    oAuth.authorize(
      Request, Response,
      {
        authenticateHandler: {
          handle: (request, response, handleCB) => {
            oAuthService.getUser(request.body.username, request.body.password,
              (authErr, user) => {
                if (authErr) {
                  return handleCB(authErr);
                }
                return handleCB(null, user);
              });
          }
        }
      },
      (authErr) => {
        if (authErr) {
          response.status(401).send(authErr);
        } else {
          response.set(Response.headers);
          response.redirect(307, Response.headers.location);
        }
      }
    );
  }
  /**
   * OAuth2.0 Authentication
   *
   * @param  {Object}   request
   * @param  {Object}   response
   * @param  {Function} next
   */
  authenticate(request, response, next) {
    let Request = new OAuthServer.Request(request);
    let Response = new OAuthServer.Response(request);
    let path = request.originalUrl;
    _.times(_.keys(request.params).length, () => {
      // eslint-disable-next-line no-useless-escape
      path = path.replace(new RegExp('\/(?:.(?!\/))+$'), '');
    });
    oAuth.authenticate(
      Request, Response, {
        scope: {
          method: request.method,
          path
        }
      },
      (authErr) => {
        if (authErr) {
          response.status(401).send(authErr);
        } else {
          next();
        }
      }
    );
  }
  /**
   * OAuth2.0 Token
   *
   * @param  {Object} request
   * @param  {Object} response
   */
  token(request, response) {
    let Request = new OAuthServer.Request(request);
    let Response = new OAuthServer.Response(request);
    oAuth.token(
      Request, Response, {},
      (tokenErr, token) => {
        if (tokenErr) {
          response.status(401).send(tokenErr);
        } else {
          userService.getUserDetails(token.userId, (userErr, user) => {
            if (userErr) {
              response.status(500).send(userErr);
            }
            user.dataValues.auth = token;
            response.status(200).send(user);
          });
        }
      }
    );
  }
}

module.exports = OAuth;
