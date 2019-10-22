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
let PermissionDao = {};

/**
 * Dao to add permission for role
 *
 * @param {Object} permission
 * @param {Function} addCB
 */
PermissionDao.addPermission = (permission, addCB) => {
  models.Permission.create(permission).then((result) => (
    addCB(null, result)
  ), (findErr) => (
    addCB(findErr)
  ));
};

/**
 * Dao to find role by id
 * 
 * @param {UUID} roleId
 * @param {Function} findCB
 */
PermissionDao.findByRole = (roleId, findCB) => {
  models.Permission.findAll({where: {roleId}}).then((result) => (
    findCB(null, result)
  ), (findErr) => (
    findCB(findErr)
  ));
};

module.exports = PermissionDao;
