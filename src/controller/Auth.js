/**
 * Controller to route all routes with index "/api/auth"
 *
 * @exports {express} router
 */
const express = require('express');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
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
 * /api/auth/authenticate:
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

module.exports = router;
