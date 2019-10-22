/**
 * Service to process functions with Role data
 *
 * @exports {Class} RoleService
 */
const async = require('async');
const _ = require('lodash');
const roleDao = require('../dao/Role');
const permissionService = require('../service/Permission');
const uuid = require('../utils/uuid');
const constant = require('../utils/constant');

/**
 * RoleService class
 *
 * @method {public} getRolesByTenant
 * @method {private} loadRoleDetails
 * @method {public} getRoleDetailsByTenant
 * @method {public} addRole
 * @method {public} getRoleById
 */
let RoleService = {};

/**
 * Service to add role for Tenant
 *
 * @param  {UUID} tenantId
 * @param  {Function} addRoleCB
 */
RoleService.addRoleForTenant = (tenantId, addRoleCB) => {
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
};

/**
 * Service to get roles by Tenant ID
 *
 * @param  {UUID} tenantId
 * @param  {Function} getRolesCB
 */
RoleService.getRolesByTenant = (tenantId, getRolesCB) => {
  roleDao.getRolesByTenantId(tenantId, (roleErr, roles) => {
    if (roleErr) {
      return getRolesCB(roleErr);
    }
    return getRolesCB(null, roles);
  });
};

/**
 * Method to load role details for role list
 *
 * @param  {Array} roles
 * @param  {Function} loadDetailsCB
 */
const loadRoleDetails = (roles, loadDetailsCB) => {
  async.map(roles, (role, asyncCB) => {
    roleDao.findRoleById(role.parentId, false, (findErr, parentId) => {
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
};

/**
 * Method to get role details by tenant id
 *
 * @param  {UUID} tenantId
 * @param  {Function} getDetailsCB
 */
RoleService.getRoleDetailsByTenant = (tenantId, getDetailsCB) => {
  async.waterfall([
    async.apply(roleDao.getRolesByTenantId, tenantId),
    loadRoleDetails
  ], (waterfallErr, result) => {
    if (waterfallErr) {
      return getDetailsCB(waterfallErr);
    }
    return getDetailsCB(null, result);
  });
};

/**
 * Service to add new role
 *
 * @param  {Object} data
 * @param  {Function} addRoleCB
 */
RoleService.addRole = (data, addRoleCB) => {
  async.waterfall([
    async.apply(roleDao.createRole, _.omit(data, ['permissions'])),
    (result, passPermissionCB) => {
      const permissions = _.map(
        _.union(data.permissions, constant.DEFAULT_PRIVILEGES),
        (privilegeId) => ({
          roleId: result.id,
          privilegeId
        })
      );
      return passPermissionCB(null, permissions);
    },
    permissionService.savePermissions
  ], (waterfallErr, result) => {
    if (waterfallErr) {
      return addRoleCB(waterfallErr);
    }
    return addRoleCB(null, result);
  });
};

/**
 * Service to get Role by ID
 *
 * @param  {UUID} roleId
 * @param  {Function} getRoleCB
 */
RoleService.getRoleById = (roleId, getRoleCB) => {
  roleDao.findRoleById(roleId, true, (findErr, role) => {
    if (findErr) {
      return getRoleCB(findErr);
    }
    return getRoleCB(null, role);
  });
};

module.exports = RoleService;
