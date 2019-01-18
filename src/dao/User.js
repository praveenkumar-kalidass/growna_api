/**
 * Dao to fetch User data
 *
 * @exports {Class} UserDao
 */
const models = require('../models');
const passwordHash = require('password-hash');

/**
 * UserDao class
 *
 * @method {public} findUserById
 * @method {public} getUserByCredentials
 */
class UserDao {
  /**
   * Method to find User object by id
   *
   * @param  {UUID} userId
   * @param  {Function} getCB
   */
  findUserById(userId, getCB) {
    models.User.find({
      where: {
        id: userId
      }
    }).then((user) => {
      if (!user) {
        return getCB(Error('No User found'));
      }
      return getCB(null, user);
    }, (getError) => {
      return getCB(getError);
    });
  }
  /**
   * Method to find User object by email
   *
   * @param  {String} email
   * @param  {String} password
   * @param  {Function} getUserCB
   */
  getUserByCredentials(email, password, getUserCB) {
    models.User.find({
      where: {
        email: email
      }
    }).then((user) => {
      if (!user) {
        return getUserCB(Error('User not found'));
      }
      // Validate password
      if (passwordHash.verify(password, user.password)) {
        return getUserCB(null, user);
      }
      return getUserCB(Error('Invalid Credentials'));
    }, (getError) => {
      return getUserCB(getError);
    });
  }
}

module.exports = UserDao;
