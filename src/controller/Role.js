/**
 * Controller to route all routes with index "/api/role"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const RoleService = require('../service/Role');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const roleService = new RoleService();

/**
 * @swagger
 * /api/role/{id}:
 *  get:
 *    summary: Get Role by ID
 *    description: Get Role detail by ID
 *    tags:
 *      - Role
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
 *        description: Returns role object
 *      500:
 *        description: Server Error
 */
router.get('/:id', oAuth.authenticate, (request, response) => {
  roleService.getRoleById(request.params.id, (roleErr, role) => {
    if (roleErr) {
      response.status(500).send(roleErr);
    }
    response.send(role);
  });
});

/**
 * @swagger
 * /api/role/detail/{tenantId}:
 *  get:
 *    summary: Get all roles by detail for Tenant
 *    description: Get list of roles in detail by Tenant ID
 *    tags:
 *      - Role
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
 *        description: Returns list of roles with details
 *      500:
 *        description: Server Error
 */
router.get('/detail/:tenantId', oAuth.authenticate, (request, response) => {
  roleService.getRoleDetailsByTenant(request.params.tenantId,
    (tenantErr, roles) => {
      if (tenantErr) {
        response.status(500).send(tenantErr);
      }
      response.send(roles);
    });
});

/**
 * @swagger
 * /api/role/tenant/{tenantId}:
 *  get:
 *    summary: Get all roles for Tenant
 *    description: Get list of roles by Tenant ID
 *    tags:
 *      - Role
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
 *        description: Returns list of roles
 *      500:
 *        description: Server Error
 */
router.get('/tenant/:tenantId', oAuth.authenticate, (request, response) => {
  roleService.getRolesByTenant(request.params.tenantId,
    (tenantErr, roles) => {
      if (tenantErr) {
        response.status(500).send(tenantErr);
      }
      response.send(roles);
    });
});

/**
 * @swagger
 * /api/role:
 *  post:
 *    summary: Create a new role with permissions
 *    description: Add a role to the database
 *    tags:
 *      - Role
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              type:
 *                type: string
 *                enum: [WEB, AGENCY]
 *              parentId:
 *                type: string
 *                format: uuid
 *              tenantId:
 *                type: string
 *                format: uuid
 *              permissions:
 *                type: array
 *            required:
 *              - name
 *              - type
 *              - parentId
 *              - tenantId
 *              - permissions
 *    responses:
 *      200:
 *        description: Returns the Created Role
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  roleService.addRole(request.body, (roleErr, role) => {
    if (roleErr) {
      response.status(500).send(roleErr);
    }
    response.send(role);
  });
});

module.exports = router;
