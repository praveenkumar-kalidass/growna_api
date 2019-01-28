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
    }, (getError) => {
      return getCB(getError);
    });
  }
}

module.exports = RoleDao;
