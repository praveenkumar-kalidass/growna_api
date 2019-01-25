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
   * @param  {Function} getCB
   */
  findPrivilegesByRole(role, getCB) {
    models.Role.find({
      where: {
        name: role
      },
      include: {
        model: models.Privilege,
        as: 'privileges',
        through: {
          attributes: ['id']
        }
      }
    }).then((roleDetail) => {
      return getCB(null, roleDetail.privileges);
    }, (getError) => {
      return getCB(getError);
    });
  }
}

module.exports = RoleDao;
