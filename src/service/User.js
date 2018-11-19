/**
 * Service to process functions with User data
 *
 * @exports {Class} UserService
 */
const async = require('async');
const UserDao = require('../dao/User');
const RoleService = require('../service/Role');
const userDao = new UserDao();
const roleService = new RoleService();

/**
 * UserService class
 *
 * @method {public} getUserPrivileges
 */
class UserService {
  /**
   * Method to get all privileges associated with the user role
   *
   * @param  {UUID} userId
   * @param  {Function} getPrivilegesCB
   */
  getUserPrivileges(userId, getPrivilegesCB) {
    async.waterfall([
      async.apply(userDao.findUserById, userId),
      (user, passRoleCB) => {
        return passRoleCB(null, user.dataValues.roleId);
      },
      roleService.getRolePrivileges
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getPrivilegesCB(waterfallErr);
      }
      return getPrivilegesCB(null, result);
    });
  }
}

module.exports = UserService;
