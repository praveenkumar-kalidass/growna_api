/**
 * Dao to fetch Role data
 *
 * @exports {Class} RoleDao
 */
const models = require('../models');

/**
 * RoleDao class
 *
 * @method {public} createRole
 * @method {public} getRolesByTenantId
 * @method {public} findRoleById
 */
class RoleDao {
  /**
   * Method to create new role
   *
   * @param  {Object} role
   * @param  {Function} createCB
   */
  createRole(role, createCB) {
    models.Role.create(role).then((result) => (
      createCB(null, result)
    ), (createErr) => (
      createCB(createErr)
    ));
  }
  /**
   * Method to get roles by tenant id
   *
   * @param  {UUID} tenantId
   * @param  {Function} findRolesCB
   */
  getRolesByTenantId(tenantId, findRolesCB) {
    models.Role.findAll({
      where: {
        tenantId
      }
    }).then((roles) => (
      findRolesCB(null, roles)
    ), (findErr) => (
      findRolesCB(findErr)
    ));
  }
  /**
   * Dao to find role by ID
   *
   * @param  {UUID} roleId
   * @param  {Boolean} privileges
   * @param  {Function} findCB
   */
  findRoleById(roleId, privileges, findCB) {
    let include;
    if (privileges) {
      include = {
        model: models.Privilege,
        as: 'privileges'
      };
    }
    models.Role.find({
      where: {
        id: roleId
      },
      include
    }).then((role) => (
      findCB(null, role)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = RoleDao;
