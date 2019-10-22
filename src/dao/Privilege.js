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
 * @method {public} findPrivilegeById
 */
let PrivilegeDao = {};

/**
 * Dao to get all privileges by scope
 *
 * @param  {String} scope
 * @param  {Function} findCB
 */
PrivilegeDao.findAllPrivileges = (scope, findCB) => {
  models.Privilege.findAll({
    where: {scope}
  }).then((privileges) => (
    findCB(null, privileges)
  ), (findErr) => (
    findCB(findErr)
  ));
};

/**
 * Method to get privileges by roleId
 *
 * @param  {String} id
 * @param  {Function} findCB
 */
PrivilegeDao.findPrivilegeById = (id, findCB) => {
  models.Privilege.findById(id).then((privilege) => (
    findCB(null, privilege)
  ), (findErr) => (
    findCB(findErr)
  ));
};

module.exports = PrivilegeDao;
