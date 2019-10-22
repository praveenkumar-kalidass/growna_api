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
 * @method {public} updateUser
 * @method {public} getUsersByQuery
 */
let UserDao = {};

/**
 * Method to find User object by id
 *
 * @param  {UUID} id
 * @param  {Function} getCB
 */
UserDao.findUserById = (id, getCB) => {
  models.User.findById(id).then((user) => {
    if (!user) {
      return getCB(new ServerError('No User found'));
    }
    return getCB(null, user);
  }, (getError) => (
    getCB(getError)
  ));
};

/**
 * Method to find User object by email
 *
 * @param  {String} email
 * @param  {String} password
 * @param  {Function} getUserCB
 */
UserDao.getUserByCredentials = (email, password, getUserCB) => {
  models.User.find({
    where: { email },
    include: {
      model: models.Role,
      as: 'role'
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
  }, (getError) => (
    getUserCB(getError)
  ));
};

/**
 * Method to create new user
 *
 * @param  {Object} user
 * @param  {Function} createCB
 */
UserDao.createUser = (user, createCB) => {
  models.User.create({
    ...user,
    password: passwordHash.generate(user.password)
  }).then((user) => (
    createCB(null, user)
  ), (createErr) => (
    createCB(createErr)
  ));
};

/**
 * Method to update user by id
 *
 * @param  {Object} user
 * @param  {Function} updateCB
 */
UserDao.updateUser = (user, updateCB) => {
  models.User.update({
    ...user,
    password: passwordHash.isHashed(user.password) ?
      user.password :
      passwordHash.generate(user.password)
  }, {
    where: {
      id: user.id
    },
    returning: true
  }).then((result) => (
    updateCB(null, result[1][0])
  ), (updateErr) => (
    updateCB(updateErr)
  ));
};

/**
 * Method to get users by dynamic query
 *
 * @param  {Object} query
 * @param  {Function} getUsersCB
 */
UserDao.getUsersByQuery = (query, getUsersCB) => {
  models.User.findAll(query).then((users) => (
    getUsersCB(null, users)
  ), (findErr) => (
    getUsersCB(findErr)
  ));
};

module.exports = UserDao;
