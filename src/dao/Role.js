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
   * @param {UUID} roleId
   * @param {Function} getCB
   */
  findPrivilegesByRole(roleId, getCB) {
    models.Role.find({
      where: {
        id: roleId
      },
      include: {
        model: models.Privilege,
        as: 'privileges',
        through: {
          attributes: ['id']
        }
      }
    }).then((role) => {
      return getCB(null, role);
    }, (getError) => {
      return getCB(getError);
    });
  }
}

module.exports = RoleDao;
