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
 * Controller to route "/api/user/create"
 *
 * @param {Object} user
 * @type  {POST}
 */
router.post('/add', (request, response) => {
  userService.addUser(request.body, (userErr, user) => {
    if (userErr) {
      response.status(500).send(userErr);
    }
    response.send(user);
  });
});

module.exports = router;
