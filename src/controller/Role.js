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
 * Controller to route "/api/role/privileges"
 *
 * @param {String} role
 * @type  {GET}
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
 * Controller to route "/api/role/validate"
 *
 * @param {String} role
 * @param {String} privilege
 * @type  {GET}
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

module.exports = router;
