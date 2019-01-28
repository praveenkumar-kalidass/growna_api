/**
 * Service to process functions with User data
 *
 * @exports {Class} UserService
 */
const UserDao = require('../dao/User');
const userDao = new UserDao();

/**
 * UserService class
 *
 * @method {public} getUserPrivileges
 */
class UserService {
  /**
   * Method to get details of a user
   *
   * @param  {UUID} userId
   * @param  {Function} getDetailsCB
   */
  getUserDetails(userId, getDetailsCB) {
    userDao.findUserById(userId, (findErr, user) => {
      if (findErr) {
        return getDetailsCB(findErr);
      }
      return getDetailsCB(null, user);
    });
  }
  /**
   * Method to add a new user
   *
   * @param  {Object} user
   * @param  {Function} addCB
   */
  addUser(userId, addCB) {
    userDao.createUser(userId, (addErr, user) => {
      if (addErr) {
        return addCB(addErr);
      }
      return addCB(null, user);
    });
  }
}

module.exports = UserService;
