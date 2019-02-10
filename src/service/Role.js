/**
 * Service to process functions with Role data
 *
 * @exports {Class} RoleService
 */
const RoleDao = require('../dao/Role');
const uuid = require('../utils/uuid');
const constant = require('../utils/constant');
const roleDao = new RoleDao();

/**
 * RoleService class
 *
 * @method {public} getRolePrivileges
 * @method {public} validateRoute
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
  /**
   * Service to add role for Tenant
   *
   * @param {UUID} tenantId
   * @param {Function} addRoleCB
   */
  addRoleForTenant(tenantId, addRoleCB) {
    const role = {
      name: constant.GIS_ADMIN,
      type: constant.AGENCY,
      parentId: uuid.GIS_SUPER_ADMIN,
      tenantId
    };
    roleDao.createRole(role, (createErr, result) => {
      if (createErr) {
        return addRoleCB(createErr);
      }
      return addRoleCB(null, result);
    });
  }
}

module.exports = RoleService;
