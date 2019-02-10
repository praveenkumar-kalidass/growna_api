/**
 * Dao to fetch User data
 *
 * @exports {Class} UserDao
 */
const models = require('../models');
const passwordHash = require('password-hash');
const ServerError = require('oauth2-server/lib/errors/server-error');

/**
 * UserDao class
 *
 * @method {public} findUserById
 * @method {public} getUserByCredentials
 * @method {public} createUser
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
      },
      include: {
        model: models.Role,
        as: 'role'
      }
    }).then((user) => {
      if (!user) {
        return getCB(new ServerError('No User found'));
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
        return getUserCB(new ServerError('User not found'));
      }
      // Validate password
      if (passwordHash.verify(password, user.password)) {
        return getUserCB(null, user);
      }
      return getUserCB(new ServerError('Invalid Credentials'));
    }, (getError) => {
      return getUserCB(getError);
    });
  }
  /**
   * Method to create new user
   *
   * @param  {Object} user
   * @param  {Function} createCB
   */
  createUser(user, createCB) {
    models.User.create({
      ...user,
      password: passwordHash.generate(user.password)
    }).then((user) => {
      return createCB(null, user);
    }, (createErr) => {
      return createCB(createErr);
    });
  }
}

module.exports = UserDao;
