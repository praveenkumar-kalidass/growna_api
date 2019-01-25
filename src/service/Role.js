/**
 * Service to process functions with Role data
 *
 * @exports {Class} RoleService
 */
const RoleDao = require('../dao/Role');
const roleDao = new RoleDao();

/**
 * RoleService class
 *
 * @method {public} getRolePrivileges
 */
class RoleService {
  /**
   * Method to get all privileges associated with the role
   *
   * @param  {String} role
   * @param  {Function} getPrivilegesCB
   */
  getRolePrivileges(role, getPrivilegesCB) {
    roleDao.findPrivilegesByRole(role, (roleErr, privileges) => {
      if (roleErr) {
        return getPrivilegesCB(roleErr);
      }
      return getPrivilegesCB(null, privileges);
    });
  }
}

module.exports = RoleService;
