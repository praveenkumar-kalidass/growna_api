/**
 * Service to process functions with Tenant data
 *
 * @exports {Class} TenantService
 */
const async = require('async');
const _ = require('lodash');
const TenantDao = require('../dao/Tenant');
const RoleService = require('../service/Role');
const UserService = require('../service/User');
const PermissionService = require('../service/Permission');
const tenantDao = new TenantDao();
const roleService = new RoleService();
const userService = new UserService();
const permissionService = new PermissionService();

/**
 * TenantService class
 *
 * @method {public} registerTenant
 */
class TenantService {
  /**
   * Service to register new tenant and create admin
   *
   * @param  {Object} data
   * @param  {Function} registerCB
   */
  registerTenant(data, registerCB) {
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
      userService.saveUser,
      (user, passPermissionCB) => {
        const permissions = _.map(data.permissions, (privilegeId) => ({
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
  }
}

module.exports = TenantService;
