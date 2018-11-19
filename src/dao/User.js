const models = require('../models');

class UserDao {
  findUserById(userId, getCB) {
    models.User.find({
      userId: userId
    }).then((user) => {
      return getCB(null, user);
    }, (getError) => {
      console.error(getError);
      return getCB(getError);
    })
  }
}

module.exports = UserDao;
