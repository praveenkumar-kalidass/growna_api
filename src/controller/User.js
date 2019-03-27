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
 * /api/user/{id}:
 *  get:
 *    summary: Get User details
 *    description: Get User details by user id
 *    tags:
 *      - User
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: id
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
router.get('/:id', oAuth.authenticate, (request, response) => {
  userService.getUserDetails(request.params.id, (userErr, user) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(user);
  });
});

/**
 * @swagger
 * /api/user/role/{roleId}:
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
router.get('/role/:roleId', oAuth.authenticate, (request, response) => {
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

/**
 * @swagger
 * /api/user:
 *  post:
 *    summary: Create new user
 *    description: Save a user to the database
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
 *        description: Returns the Saved User
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  userService.addUser(request.body, (userErr, user) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(user);
  });
});

/**
 * @swagger
 * /api/user:
 *  put:
 *    summary: Update user
 *    description: Update a user to the database
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
 *              id:
 *                type: string
 *                format: uuid
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
 *              - id
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
 *        description: Returns the Saved User
 *      500:
 *        description: Server Error
 */
router.put('/', oAuth.authenticate, (request, response) => {
  userService.updateUserById(request.body, (userErr, user) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(user);
  });
});

/**
 * @swagger
 * /api/user/image:
 *  put:
 *    summary: Update user image
 *    description: Update a user image and delete previous image
 *    tags:
 *      - User
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              image:
 *                type: string
 *                format: binary
 *              userId:
 *                type: string
 *                format: uuid
 *            required:
 *              - userId
 *              - image
 *    responses:
 *      200:
 *        description: Returns the Saved Image
 *      500:
 *        description: Server Error
 */
router.put('/image', oAuth.authenticate, (request, response) => {
  userService.updateUserImage(request.body.userId, request.files.image,
    (updateErr, image) => {
      if (updateErr) {
        response.status(500).send(updateErr);
      }
      response.send(image);
    });
});

module.exports = router;
