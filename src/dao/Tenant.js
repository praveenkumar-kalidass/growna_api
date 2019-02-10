/**
 * Dao to fetch Tenant data
 *
 * @exports {Class} TenantDao
 */
const models = require('../models');

/**
 * RoleDao class
 *
 * @method {public} addTenant
 */
class TenantDao {
  /**
   * Method to create a new tenant
   *
   * @param {String} tenantName
   * @param {Function} addCB
   */
  addTenant(tenantName, addCB) {
    models.Tenant.create({
      name: tenantName
    }).then((tenant) => {
      return addCB(null, tenant);
    }, (createErr) => {
      return addCB(createErr);
    });
  }
}

module.exports = TenantDao;
