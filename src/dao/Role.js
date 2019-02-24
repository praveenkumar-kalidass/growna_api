/**
 * Dao to fetch Role data
 *
 * @exports {Class} RoleDao
 */
const models = require('../models');

/**
 * RoleDao class
 *
 * @method {public} findPrivilegesByRole
 * @method {public} createRole
 * @method {public} getRolesByTenantId
 * @method {public} findRoleById
 */
class RoleDao {
  /**
   * Method to get role data with privileges associated
   *
   * @param  {String} role
   * @param  {String} privilege
   * @param  {Function} getCB
   */
  findPrivilegesByRole(role, privilege, getCB) {
    let include = {
      model: models.Privilege,
      as: 'privileges',
      through: {
        attributes: ['id']
      }
    };
    if (privilege) {
      include.where = {
        description: privilege
      };
    }
    models.Role.find({
      where: {
        name: role
      },
      include: include
    }).then((roleDetail) => {
      if (roleDetail) {
        return getCB(null, roleDetail.privileges);
      }
      return getCB(null, roleDetail);
    }, (getError) => (
      getCB(getError)
    ));
  }
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
   * @param  {Function} findCB
   */
  findRoleById(roleId, findCB) {
    models.Role.find({
      where: {
        id: roleId
      }
    }).then((role) => (
      findCB(null, role)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = RoleDao;
