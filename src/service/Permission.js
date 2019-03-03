/**
 * Service to process functions with Permission data
 *
 * @exports {Class} PermissionService
 */
const async = require('async');
const _ = require('lodash');
const PermissionDao = require('../dao/Permission');
const PrivilegeService = require('../service/Privilege');
const permissionDao = new PermissionDao();
const privilegeService = new PrivilegeService();

/**
 * PermissionService class
 *
 * @method {public} savePermissions
 * @method {private} findPrivileges
 * @method {public} getPermissionsByRole
 */
class PermissionService {
  /**
   * Method to save list of permissions for a role
   *
   * @param  {Array} permissions
   * @param  {Function} saveCB
   */
  savePermissions(permissions, saveCB) {
    async.map(permissions, (permission, asyncCB) => {
      permissionDao.addPermission(permission, (addErr, result) => {
        if (addErr) {
          return asyncCB(addErr);
        }
        return asyncCB(null, result);
      });
    }, (mapErr, result) => {
      if (mapErr) {
        return saveCB(mapErr);
      }
      return saveCB(null, result);
    });
  }
  /**
   * Private method to find privileges for all permissions
   *
   * @param  {Array} permissions
   * @param  {Function} findCB
   */
  static findPrivileges(permissions, findCB) {
    async.map(permissions, (permission, asyncCB) => {
      privilegeService.getPrivilegeById(permission.privilegeId, (getErr, privilege) => {
        if (getErr) {
          return asyncCB(getErr);
        }
        return asyncCB(null, privilege);
      });
    }, (mapErr, result) => {
      if (mapErr) {
        return findCB(mapErr);
      }
      return findCB(null, result);
    });
  }
  /**
   * Service to filter permissions by role and type
   *
   * @param  {UUID} roleId
   * @param  {String} type
   * @param  {Function} getPermissionsCB
   */
  getPermissionsByRole(roleId, type, getPermissionsCB) {
    async.waterfall([
      async.apply(permissionDao.findByRole, roleId),
      PermissionService.findPrivileges
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getPermissionsCB(waterfallErr);
      }
      return getPermissionsCB(null, _.filter(result, {type}));
    });
  }
  /**
   * Service to validate privilege
   *
   * @param  {UUID} roleId
   * @param  {String} description
   * @param  {Function} validateCB
   */
  validateRoute(roleId, description, validateCB) {
    async.waterfall([
      async.apply(permissionDao.findByRole, roleId),
      PermissionService.findPrivileges
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return validateCB(waterfallErr);
      }
      if (_.find(result, {description})) {
        return validateCB(null, {valid: true});
      }
      return validateCB(null, {valid: false});
    });
  }
}

module.exports = PermissionService;
