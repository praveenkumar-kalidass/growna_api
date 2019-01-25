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

module.exports = router;
