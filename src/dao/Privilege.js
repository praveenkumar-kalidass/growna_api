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
   * Dao to get all privileges without any query
   *
   * @param  {Function} findCB
   */
  findAllPrivileges(findCB) {
    models.Privilege.findAll({}).then((privileges) => (
      findCB(null, privileges)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = PrivilegeDao;
