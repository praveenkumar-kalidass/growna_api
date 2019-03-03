/**
 * Controller to route all routes with index "/api/permission"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const PermissionService = require('../service/Permission');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const permissionService = new PermissionService();

/**
 * @swagger
 * /api/permission/{type}/{roleId}:
 *  get:
 *    summary: Get all privileges for the Role
 *    description: Client privileges assigned for the role
 *    tags:
 *      - Permission
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: roleId
 *        in: path
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *      - name: type
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
router.get('/:type/:roleId', oAuth.authenticate, (request, response) => {
  permissionService.getPermissionsByRole(request.params.roleId, request.params.type, (privilegeErr, privileges) => {
    if (privilegeErr) {
      response.status(500).send(privilegeErr);
    }
    response.send(privileges);
  });
});

/**
 * @swagger
 * /api/permission/validate/{roleId}/{privilege}:
 *  get:
 *    summary: Validate Privilege for the particular Role
 *    description: Check whether the privilege is assigned for the role
 *    tags:
 *      - Permission
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: roleId
 *        in: path
 *        schema:
 *          type: string
 *          format: uuid
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
router.get('/validate/:roleId/:privilege', oAuth.authenticate, (request, response) => {
  permissionService.validateRoute(request.params.roleId, request.params.privilege,
    (validateErr, valid) => {
      if (validateErr) {
        response.status(500).send(validateErr);
      }
      response.send(valid);
    });
});

module.exports = router;
