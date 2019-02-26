/**
 * Service to process functions with Permission data
 *
 * @exports {Class} PermissionService
 */
const async = require('async');
const PermissionDao = require('../dao/Permission');
const permissionDao = new PermissionDao();

/**
 * PermissionService class
 *
 * @method {public} savePermissions
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
}

module.exports = PermissionService;
