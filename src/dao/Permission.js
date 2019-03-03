/**
 * Dao to fetch Permission data
 *
 * @exports {Class} PermissionDao
 */
const models = require('../models');

/**
 * PermissionDao class
 *
 * @method {public} addPermission
 */
class PermissionDao {
  /**
   * Dao to add permission for role
   *
   * @param {Object} permission
   * @param {Function} addCB
   */
  addPermission(permission, addCB) {
    models.Permission.create(permission).then((result) => (
      addCB(null, result)
    ), (findErr) => (
      addCB(findErr)
    ));
  }
  findByRole(roleId, findCB) {
    models.Permission.findAll({where: {roleId}}).then((result) => (
      findCB(null, result)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = PermissionDao;
