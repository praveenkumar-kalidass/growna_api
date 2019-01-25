/**
 * Index Controller to get all routes with index "/api"
 *
 * @exports {express} router
 */
const express = require('express');
const OAuthServer = require('oauth2-server');
const OAuthService = require('../service/OAuthServer');
const authController = require('./Auth');
const roleController = require('./Role');
const userController = require('./User');
const oAuthService = new OAuthService();
const router = express.Router();

/**
 * OAuth2.0 Server
 *
 */
const oAuth = new OAuthServer({
  model: oAuthService,
  allowEmptyState: true,
  requireClientAuthentication: {
    password: false
  }
});

/**
 * Middleware - "/api/auth/*"
 *
 * @param {String} route
 * @param {Class} authController
 */
router.use('/auth', authController);

/**
 * Auth Middleware - Throw 401 for No Authorization
 *
 * @header {String} Authorization ["Bearer XXXXXX"]
 * @param  {Function} middleware
 */
router.use((request, response, next) => {
  let Request = new OAuthServer.Request(request);
  let Response = new OAuthServer.Response(request);
  oAuth.authenticate(
    Request, Response, {},
    (authErr) => {
      if (authErr) {
        response.status(401).send(authErr);
      } else {
        next();
      }
    }
  );
});

/**
 * Middleware - "/api/role/*"
 *
 * @param {String} route
 * @param {Class} roleController
 */
router.use('/role', roleController);

/**
 * Middleware - "/api/user/*"
 *
 * @param {String} route
 * @param {Class} userController
 */
router.use('/user', userController);

module.exports = router;
