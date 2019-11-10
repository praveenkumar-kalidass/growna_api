/**
 * Service to process functions with Tenant data
 *
 * @exports {Class} TenantService
 */
const async = require('async');
const _ = require('lodash');
const constant = require('../utils/constant');
const tenantDao = require('../dao/Tenant');
const roleService = require('../service/Role');
const userService = require('../service/User');
const permissionService = require('../service/Permission');

/**
 * TenantService class
 *
 * @method {public} registerTenant
 */
let TenantService = {};

/**
 * Service to register new tenant and create admin
 *
 * @param  {Object} data
 * @param  {Function} registerCB
 */
TenantService.registerTenant = (data, registerCB) => {
  async.waterfall([
    async.apply(tenantDao.addTenant, data.tenantName),
    (tenant, passCB) => (
      passCB(null, tenant.id)
    ),
    roleService.addRoleForTenant,
    (role, passCB) => {
      const user = {
        ..._.omit(data, ['tenantName', 'permissions']),
        roleId: role.id,
        tenantId: role.tenantId
      };
      return passCB(null, user);
    },
    userService.addUser,
    (user, passPermissionCB) => {
      const permissions = _.map(
        _.union(data.permissions, constant.DEFAULT_PRIVILEGES),
        (privilegeId) => ({
        roleId: user.roleId,
        privilegeId
      }));
      return passPermissionCB(null, permissions);
    },
    permissionService.savePermissions
  ], (waterfallErr, result) => {
    if (waterfallErr) {
      return registerCB(waterfallErr);
    }
    return registerCB(null, result);
  });
};

module.exports = TenantService;
