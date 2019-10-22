/**
 * Service to process data with Privilege
 *
 * @exports {Class} RoleDao
 */
const privilegeDao = require('../dao/Privilege');

/**
 * Privilege Service
 *
 * @method {public} getAllPrivileges
 * @method {public} getPrivilegeById
 */
let PrivilegeService = {};

/**
 * Method to get all privileges by scope
 *
 * @param  {String} scope
 * @param  {Function} getCB
 */
PrivilegeService.getAllPrivileges = (scope, getCB) => {
  privilegeDao.findAllPrivileges(scope, (findErr, privileges) => {
    if (findErr) {
      return getCB(findErr);
    }
    return getCB(null, privileges);
  });
};

/**
 * Method to get privilege by ID
 *
 * @param  {UUID} id
 * @param  {Function} getPrivilegeCB
 */
PrivilegeService.getPrivilegeById = (id, getPrivilegeCB) => {
  privilegeDao.findPrivilegeById(id, (findErr, privilege) => {
    if (findErr) {
      return getPrivilegeCB(findErr);
    }
    return getPrivilegeCB(null, privilege);
  });
};

module.exports = PrivilegeService;
