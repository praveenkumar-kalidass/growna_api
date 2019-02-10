/**
 * Controller to route all routes with index "/api/tenant"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const TenantService = require('../service/Tenant');
const tenantService = new TenantService();

/**
 * @swagger
 * /api/tenant/register:
 *  post:
 *    summary: Register a new tenant
 *    description: Add a new tenant and create a admin
 *    tags:
 *      - Tenant
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
 *              createdBy:
 *                type: string
 *                format: uuid
 *              parentId:
 *                type: string
 *                format: uuid
 *              tenantName:
 *                type: string
 *            required:
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *              - createdBy
 *              - parentId
 *              - tenantName
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Server Error
 */
router.post('/register', (request, response) => {
  tenantService.registerTenant(request.body, (registerErr, tenant) => {
    if (registerErr) {
      response.status(500).send(registerErr);
    }
    response.send(tenant);
  });
});

module.exports = router;
