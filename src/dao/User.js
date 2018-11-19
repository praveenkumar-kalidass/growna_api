/**
 * Dao to fetch User data
 *
 * @exports {Class} UserDao
 */
const models = require('../models');

/**
 * UserDao class
 *
 * @method {public} findUserById
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
        return getCB(new Error("No User found").toString());
      }
      return getCB(null, user);
    }, (getError) => {
      return getCB(getError);
    });
  }
}

module.exports = UserDao;
