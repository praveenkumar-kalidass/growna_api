/**
 * Controller to route all routes with index "/api/privilege"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const PrivilegeService = require('../service/Privilege');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const privilegeService = new PrivilegeService();

/**
 * @swagger
 * /api/privilege/all:
 *  get:
 *    summary: Get all privileges
 *    description: Get all privileges from database
 *    tags:
 *      - Privilege
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: List of Privileges
 *      500:
 *        description: Server Error
 */
router.get('/all', oAuth.authenticate, (request, response) => {
  privilegeService.getAllPrivileges((getErr, privileges) => {
    if (getErr) {
      response.status(500).send(getErr);
    }
    response.send(privileges);
  });
});

module.exports = router;
