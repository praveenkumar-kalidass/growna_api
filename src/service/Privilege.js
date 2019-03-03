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
 * @method {public} getPrivilegeById
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
  /**
   * Method to get privilege by ID
   *
   * @param  {UUID} id
   * @param  {Function} getPrivilegeCB
   */
  getPrivilegeById(id, getPrivilegeCB) {
    privilegeDao.findPrivilegeById(id, (findErr, privilege) => {
      if (findErr) {
        return getPrivilegeCB(findErr);
      }
      return getPrivilegeCB(null, privilege);
    });
  }
}

module.exports = PrivilegeService;
