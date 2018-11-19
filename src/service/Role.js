/**
 * Service to process functions with Role data
 *
 * @exports {Class} RoleService
 */
const async = require('async');
const RoleDao = require('../dao/Role');
const roleDao = new RoleDao();

/**
 * RoleService class
 *
 * @method {public} getRolePrivileges
 */
class RoleService {
  /**
   * Method to get all privileges associated with the roleid
   *
   * @param  {UUID} roleId          [description]
   * @param  {Function} getPrivilegesCB [description]
   */
  getRolePrivileges(roleId, getPrivilegesCB) {
    roleDao.findPrivilegesByRole(roleId, (roleErr, role) => {
      if (roleErr) {
        return getPrivilegesCB(roleErr);
      }
      return getPrivilegesCB(null, role);
    });
  }
}

module.exports = RoleService;
