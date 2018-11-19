const express = require('express');
const router = express.Router();
const UserService = require('../service/User');
userService = new UserService();

router.get('/privileges/:userId', (request, response) => {
  userService.getUserPrivileges(request.params.userId, (privilegeErr, user) => {
    if (privilegeErr) {
      console.error(privilegeErr);
      response.status(500).send(privilegeErr);
    }
    response.send(user);
  });
});

module.exports = router;
