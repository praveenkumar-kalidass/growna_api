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
    roleDao.findPrivilegesByRole(role, null, (roleErr, privileges) => {
      if (roleErr) {
        return getPrivilegesCB(roleErr);
      }
      return getPrivilegesCB(null, privileges);
    });
  }
  /**
   * Service to validate privilege for the corresponding role
   *
   * @param  {String} role
   * @param  {String} privilege
   * @param  {Function} validateCB
   */
  validateRoute(role, privilege, validateCB) {
    roleDao.findPrivilegesByRole(role, privilege, (roleErr, privileges) => {
      if (roleErr) {
        return validateCB(roleErr);
      }
      if (privileges) {
        return validateCB(null, {valid: true});
      }
      return validateCB(null, {valid: false});
    });
  }
}

module.exports = RoleService;
