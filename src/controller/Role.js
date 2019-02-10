/**
 * Controller to route all routes with index "/api/role"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const RoleService = require('../service/Role');
const roleService = new RoleService();

/**
 * @swagger
 * /api/role/privileges/{role}:
 *  get:
 *    summary: Get all privileges for the Role
 *    description: Client privileges assigned for the role
 *    tags:
 *      - Role
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: role
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: List of Privileges for the role
 *      500:
 *        description: Server Error
 */
router.get('/privileges/:role', (request, response) => {
  roleService.getRolePrivileges(request.params.role, (privilegeErr, privileges) => {
    if (privilegeErr) {
      response.status(500).send(privilegeErr);
    }
    response.send(privileges);
  });
});

/**
 * @swagger
 * /api/role/validate/{role}/{privilege}:
 *  get:
 *    summary: Validate Privilege for the particular Role
 *    description: Check whether the privilege is assigned for the role
 *    tags:
 *      - Role
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: role
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *      - name: privilege
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: Returns a flag to determine validitiy
 *      500:
 *        description: Server Error
 */
router.get('/validate/:role/:privilege', (request, response) => {
  roleService.validateRoute(request.params.role, request.params.privilege,
    (validateErr, valid) => {
      if (validateErr) {
        response.status(500).send(validateErr);
      }
      response.send(valid);
    });
});

/**
 * @swagger
 * /api/role/all/{tenantId}:
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
router.get('/all/:tenantId', (request, response) => {
  roleService.getRolesByTenant(request.params.tenantId,
    (tenantErr, roles) => {
      if (tenantErr) {
        response.status(500).send(tenantErr);
      }
      response.send(roles);
    });
});

module.exports = router;
