/**
 * Service to process functions with Permission data
 *
 * @exports {Class} PermissionService
 */
const async = require('async');
const _ = require('lodash');
const permissionDao = require('../dao/Permission');
const privilegeService = require('../service/Privilege');

/**
 * PermissionService class
 *
 * @method {public} savePermissions
 * @method {private} findPrivileges
 * @method {public} getPermissionsByRole
 */
let PermissionService = {};

/**
 * Method to save list of permissions for a role
 *
 * @param  {Array} permissions
 * @param  {Function} saveCB
 */
PermissionService.savePermissions = (permissions, saveCB) => {
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
};

/**
 * Private method to find privileges for all permissions
 *
 * @param  {Array} permissions
 * @param  {Function} findCB
 */
const findPrivileges = (permissions, findCB) => {
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
};

/**
 * Service to filter permissions by role and type
 *
 * @param  {UUID} roleId
 * @param  {String} type
 * @param  {Function} getPermissionsCB
 */
PermissionService.getPermissionsByRole = (roleId, type, getPermissionsCB) => {
  async.waterfall([
    async.apply(permissionDao.findByRole, roleId),
    findPrivileges
  ], (waterfallErr, result) => {
    if (waterfallErr) {
      return getPermissionsCB(waterfallErr);
    }
    return getPermissionsCB(null, _.filter(result, {type}));
  });
};

/**
 * Service to validate privilege
 *
 * @param  {UUID} roleId
 * @param  {String} description
 * @param  {Function} validateCB
 */
PermissionService.validateRoute = (roleId, description, validateCB) => {
  async.waterfall([
    async.apply(permissionDao.findByRole, roleId),
    findPrivileges
  ], (waterfallErr, result) => {
    if (waterfallErr) {
      return validateCB(waterfallErr);
    }
    if (_.find(result, {description})) {
      return validateCB(null, {valid: true});
    }
    return validateCB(null, {valid: false});
  });
};

module.exports = PermissionService;
