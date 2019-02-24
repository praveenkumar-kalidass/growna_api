/**
 * Service to process functions with User data
 *
 * @exports {Class} UserService
 */
const async = require('async');
const _ = require('lodash');
const UserDao = require('../dao/User');
const RoleService = require('../service/Role');
const userDao = new UserDao();
const roleService = new RoleService();

/**
 * UserService class
 *
 * @method {public} getUserDetails
 * @method {public} getUser
 * @method {public} addUser
 * @method {public} getUsersByRole
 * @method {private} loadUserDetails
 * @method {public} getUsersByTenant
 */
class UserService {
  /**
   * Method to get details of a user
   *
   * @param  {UUID} userId
   * @param  {Function} getDetailsCB
   */
  getUserDetails(userId, getDetailsCB) {
    let user;
    async.waterfall([
      async.apply(userDao.findUserById, userId),
      (result, passRoleCB) => {
        user = result;
        return passRoleCB(null, result.roleId);
      },
      roleService.getRoleById
    ], (waterfallErr, role) => {
      if (waterfallErr) {
        return getDetailsCB(waterfallErr);
      }
      user.role = role;
      return getDetailsCB(null, user);
    });
  }
  /**
   * Method to get user for Authentication
   *
   * @param  {String} email
   * @param  {String} password
   * @param  {Function} getUserCB
   */
  getUser(email, password, getUserCB) {
    userDao.getUserByCredentials(email, password, (getErr, user) => {
      if (getErr) {
        return getUserCB(getErr);
      }
      return getUserCB(null, user);
    });
  }
  /**
   * Method to add a new user
   *
   * @param  {Object} user
   * @param  {Function} addCB
   */
  addUser(user, addCB) {
    userDao.createUser(user, (addErr, result) => {
      if (addErr) {
        return addCB(addErr);
      }
      return addCB(null, result);
    });
  }
  /**
   * Method to get users by role id
   *
   * @param  {UUID} roleId
   * @param  {Function} getUsersCB
   */
  getUsersByRole(roleId, getUsersCB) {
    const query = {
      where: { roleId }
    };
    userDao.getUsersByQuery(query, (userErr, users) => {
      if (userErr) {
        return getUsersCB(userErr);
      }
      return getUsersCB(null, users);
    });
  }
  /**
   * Method to load User Details for the list of users
   *
   * @param  {Array} users
   * @param  {Function} loadDetailsCB
   */
  static loadUserDetails(users, loadDetailsCB) {
    async.map(users, (user, asyncCB) => {
      async.parallel({
        createdBy: userDao.findUserById.bind(null, user.createdBy),
        parentId: userDao.findUserById.bind(null, user.parentId),
        role: roleService.getRoleById.bind(null, user.roleId)
      }, (parallelErr, result) => {
        if (parallelErr) {
          return asyncCB(parallelErr);
        }
        return asyncCB(null, _.extend(user.dataValues, result));
      });
    }, (mapErr, result) => {
      if (mapErr) {
        return loadDetailsCB(mapErr);
      }
      return loadDetailsCB(null, result);
    });
  }
  /**
   * Method to get User list by Tenant
   *
   * @param  {UUID} tenantId
   * @param  {Function} getUsersCB
   */
  getUsersByTenant(tenantId, getUsersCB) {
    async.waterfall([
      async.apply(userDao.getUsersByQuery, { where: { tenantId } }),
      UserService.loadUserDetails
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getUsersCB(waterfallErr);
      }
      return getUsersCB(null, result);
    });
  }
}

module.exports = UserService;
