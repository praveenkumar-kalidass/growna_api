/**
 * Controller to route all routes with index "/api/user"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const UserService = require('../service/User');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const userService = new UserService();

/**
 * @swagger
 * /api/user/add:
 *  post:
 *    summary: Create a new user
 *    description: Add a user to the database
 *    tags:
 *      - User
 *    security:
 *      - bearerAuth: []
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
 *              roleId:
 *                type: string
 *                format: uuid
 *              createdBy:
 *                type: string
 *                format: uuid
 *              parentId:
 *                type: string
 *                format: uuid
 *              tenantId:
 *                type: string
 *                format: uuid
 *            required:
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *              - roleId
 *              - createdBy
 *              - parentId
 *              - tenantId
 *    responses:
 *      200:
 *        description: Returns the Created User
 *      500:
 *        description: Server Error
 */
router.post('/add', oAuth.authenticate, (request, response) => {
  userService.addUser(request.body, (userErr, user) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(user);
  });
});

/**
 * @swagger
 * /api/user/{userId}:
 *  get:
 *    summary: Get User details
 *    description: Get User details by user id
 *    tags:
 *      - User
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: userId
 *        in: path
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *    responses:
 *      200:
 *        description: User Object
 *      500:
 *        description: Server Error
 */
router.get('/:userId', oAuth.authenticate, (request, response) => {
  userService.getUserDetails(request.params.userId, (userErr, user) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(user);
  });
});

/**
 * @swagger
 * /api/user/all/{roleId}:
 *  get:
 *    summary: Get Users by Role
 *    description: Get list of users by Role ID
 *    tags:
 *      - User
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: roleId
 *        in: path
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *    responses:
 *      200:
 *        description: Users List
 *      500:
 *        description: Server Error
 */
router.get('/all/:roleId', oAuth.authenticate, (request, response) => {
  userService.getUsersByRole(request.params.roleId, (userErr, users) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(users);
  });
});

/**
 * @swagger
 * /api/user/tenant/{tenantId}:
 *  get:
 *    summary: Get Users by Tenant
 *    description: Get list of users by Tenant ID
 *    tags:
 *      - User
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: tenantId
 *        in: path
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *    responses:
 *      200:
 *        description: Users List
 *      500:
 *        description: Server Error
 */
router.get('/tenant/:tenantId', oAuth.authenticate, (request, response) => {
  userService.getUsersByTenant(request.params.tenantId, (userErr, users) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(users);
  });
});

module.exports = router;
