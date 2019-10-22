/**
 * Controller to route all routes with index "/api/privilege"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const privilegeService = require('../service/Privilege');
const oAuth = require('./OAuth');

/**
 * @swagger
 * /api/privilege/{scope}:
 *  get:
 *    summary: Get all privileges
 *    description: Get all privileges from database
 *    tags:
 *      - Privilege
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: scope
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: List of Privileges
 *      500:
 *        description: Server Error
 */
router.get('/scope/:scope', oAuth.authenticate, (request, response) => {
  privilegeService.getAllPrivileges(request.params.scope, (getErr, privileges) => {
    if (getErr) {
      response.status(500).send(getErr);
    }
    response.send(privileges);
  });
});

module.exports = router;
