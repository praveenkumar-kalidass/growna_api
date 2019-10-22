/**
 * Controller to route all routes with index "/api/auth"
 *
 * @exports {express} router
 */
const express = require('express');
const oAuth = require('./OAuth');
const oAuthTokenService = require('../service/OAuthToken');
const userService = require('../service/User');
const router = express.Router();

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Login to pass Authentication
 *    description: Login to pass Authentication
 *    tags:
 *      - Auth
 *    requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              client_id:
 *                type: string
 *                format: uuid
 *              client_secret:
 *                type: string
 *              grant_type:
 *                default: password
 *              response_type:
 *                default: code
 *            required:
 *              - username
 *              - password
 *              - client_id
 *              - client_secret
 *              - grant_type
 *              - response_type
 *    responses:
 *      200:
 *        description: Authentication success
 *      401:
 *        description: Authentication failed
 */
router.post('/login', oAuth.authorize);

/**
 * @swagger
 * /api/auth/authorize:
 *  post:
 *    summary: Authenticate Refresh token
 *    description: Regenerate Access token using Refresh token
 *    tags:
 *      - Auth
 *    parameters:
 *      - name: code
 *        in: query
 *        schema:
 *          type: string
 *          description: Authentication code
 *    responses:
 *      200:
 *        description: Authentication success
 *      401:
 *        description: Authentication failed
 */
router.post('/authorize', oAuth.token);

/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *    summary: Signup a web user
 *    description: Save a user for web tenant
 *    tags:
 *      - Auth
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *            required:
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *    responses:
 *      200:
 *        description: Returns the Saved User
 *      500:
 *        description: Server Error
 */
router.post('/signup', (request, response) => {
  userService.signupUser(request.body, (userErr, user) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(user);
  });
});

/**
 * @swagger
 * /api/auth/logout:
 *  delete:
 *    summary: Logout to close session
 *    description: Logout user and delete accessToken
 *    tags:
 *      - Auth
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              refreshToken:
 *                type: string
 *              client:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    format: uuid
 *              user:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    format: uuid
 *            required:
 *              - refreshToken
 *              - client
 *              - user
 *    responses:
 *      200:
 *        description: Logout success
 *      401:
 *        description: Logout failure
 */
router.delete('/logout', (request, response) => {
  oAuthTokenService.revokeToken(request.body, (revokeErr, loggedOut) => {
    if (revokeErr) {
      response.status(500).send(revokeErr);
    }
    response.send(loggedOut);
  });
});

module.exports = router;
