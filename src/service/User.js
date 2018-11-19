const async = require('async');
const UserDao = require('../dao/User');
userDao = new UserDao();

class UserService {
  getUserPrivileges(userId, getPrivilegesCB) {
    async.waterfall([
      async.apply(userDao.findUserById, userId)
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getPrivilegesCB(waterfallErr);
      }
      return getPrivilegesCB(null, result);
    });
  }
}

module.exports = UserService;
