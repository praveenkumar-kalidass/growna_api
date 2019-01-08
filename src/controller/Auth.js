const express = require('express');
const OAuthServer = require('express-oauth-server');
const OAuthService = require('../service/OAuthServer');
const oAuthService = new OAuthService();
const router = express.Router();
const oAuth = new OAuthServer({
  model: oAuthService,
  grants: ['password'],
  debug: true,
  useErrorHandler: true,
  continueMiddleware: true,
  requireClientAuthentication: {
    password: false
  }
});

router.post('/login', oAuth.authorize({
  authenticateHandler: {
    handle: (request, response, handleCB) => {
      oAuthService.getUser(request.body.email, request.body.password,
        (authErr, user) => {
        if (authErr) {
          return handleCB(authErr);
        }
        return handleCB(null, user);
      });
    }
  },
  allowEmptyState: true
}), (request, response) => {
  console.log('Authorization success');
});

module.exports = router;
