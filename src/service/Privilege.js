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
   * Method to get all privileges
   *
   * @param  {Function} getCB
   */
  getAllPrivileges(getCB) {
    privilegeDao.findAllPrivileges((findErr, privileges) => {
      if (findErr) {
        return getCB(findErr);
      }
      return getCB(null, privileges);
    });
  }
}

module.exports = PrivilegeService;
