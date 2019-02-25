/**
 * Service to process functions with Role data
 *
 * @exports {Class} RoleService
 */
const async = require('async');
const _ = require('lodash');
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
 * @method {public} getRolesByTenant
 * @method {private} loadRoleDetails
 * @method {public} getRoleDetailsByTenant
 * @method {public} addRole
 * @method {public} getRoleById
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
  /**
   * Service to get roles by Tenant ID
   *
   * @param  {UUID} tenantId
   * @param  {Function} getRolesCB
   */
  getRolesByTenant(tenantId, getRolesCB) {
    roleDao.getRolesByTenantId(tenantId, (roleErr, roles) => {
      if (roleErr) {
        return getRolesCB(roleErr);
      }
      return getRolesCB(null, roles);
    });
  }
  /**
   * Method to load role details for role list
   *
   * @param  {Array} roles
   * @param  {Function} loadDetailsCB
   */
  static loadRoleDetails(roles, loadDetailsCB) {
    async.map(roles, (role, asyncCB) => {
      roleDao.findRoleById(role.parentId, (findErr, parentId) => {
        if (findErr) {
          return asyncCB(findErr);
        }
        return asyncCB(null, _.extend(role.dataValues, {parentId}));
      });
    }, (mapErr, result) => {
      if (mapErr) {
        return loadDetailsCB(mapErr);
      }
      return loadDetailsCB(null, result);
    });
  }
  /**
   * Method to get role details by tenant id
   *
   * @param  {UUID} tenantId
   * @param  {Function} getDetailsCB
   */
  getRoleDetailsByTenant(tenantId, getDetailsCB) {
    async.waterfall([
      async.apply(roleDao.getRolesByTenantId, tenantId),
      RoleService.loadRoleDetails
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getDetailsCB(waterfallErr);
      }
      return getDetailsCB(null, result);
    });
  }
  /**
   * Service to add new role
   *
   * @param {Object} role
   * @param {Function} addRoleCB
   */
  addRole(role, addRoleCB) {
    roleDao.createRole(role, (createErr, result) => {
      if (createErr) {
        return addRoleCB(createErr);
      }
      return addRoleCB(null, result);
    });
  }
  /**
   * Service to get Role by ID
   *
   * @param  {UUID} roleId
   * @param  {Function} getRoleCB
   */
  getRoleById(roleId, getRoleCB) {
    roleDao.findRoleById(roleId, (findErr, role) => {
      if (findErr) {
        return getRoleCB(findErr);
      }
      return getRoleCB(null, role);
    });
  }
}

module.exports = RoleService;
