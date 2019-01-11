/**
 * Controller to route all routes with index "/api/user"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const UserService = require('../service/User');
const userService = new UserService();

/**
 * Controller to route "/api/privileges"
 *
 * @param {UUID} userId
 * @type  {GET}
 */
router.get('/privileges/:userId', (request, response) => {
  userService.getUserPrivileges(request.params.userId, (privilegeErr, role) => {
    if (privilegeErr) {
      console.error(privilegeErr);
      response.status(500).send(privilegeErr);
    }
    response.send(role);
  });
});

module.exports = router;
