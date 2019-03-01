/**
 * Service to process data with Privilege
 *
 * @exports {Class} RoleDao
 */
const PrivilegeDao = require('../dao/Privilege');
const privilegeDao = new PrivilegeDao();

/**
 * Privilege Service
 *
 * @method {public} getAllPrivileges
 */
class PrivilegeService {
  /**
   * Method to get all privileges by scope
   *
   * @param  {String} scope
   * @param  {Function} getCB
   */
  getAllPrivileges(scope, getCB) {
    privilegeDao.findAllPrivileges(scope, (findErr, privileges) => {
      if (findErr) {
        return getCB(findErr);
      }
      return getCB(null, privileges);
    });
  }
}

module.exports = PrivilegeService;
