/**
 * Dao to fetch Role data
 *
 * @exports {Class} PrivilegeDao
 */
const models = require('../models');

/**
 * Privilege Dao
 *
 * @method {public} findAllPrivileges
 */
class PrivilegeDao {
  /**
   * Dao to get all privileges by scope
   *
   * @param  {String} scope
   * @param  {Function} findCB
   */
  findAllPrivileges(scope, findCB) {
    models.Privilege.findAll({
      where: {scope}
    }).then((privileges) => (
      findCB(null, privileges)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = PrivilegeDao;
