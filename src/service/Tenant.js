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
const tenantDao = new TenantDao();
const roleService = new RoleService();
const userService = new UserService();

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
          ..._.omit(data, ['tenantName']),
          roleId: role.id,
          tenantId: role.tenantId
        };
        return passCB(null, user);
      },
      userService.addUser
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return registerCB(waterfallErr);
      }
      return registerCB(null, result);
    });
  }
}

module.exports = TenantService;
