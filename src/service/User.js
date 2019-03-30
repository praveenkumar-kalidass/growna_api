/**
 * Service to process functions with User data
 *
 * @exports {Class} UserService
 */
const fs = require('fs');
const async = require('async');
const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const constant = require('../utils/constant');
const uuid = require('../utils/uuid');
const UserDao = require('../dao/User');
const RoleService = require('../service/Role');
const ImageService = require('../service/Image');
const userDao = new UserDao();
const roleService = new RoleService();
const imageService = new ImageService();

/**
 * UserService class
 *
 * @method {public} getUserDetails
 * @method {public} getUser
 * @method {public} signupUser
 * @method {public} addUser
 * @method {public} updateUserById
 * @method {public} getUsersByRole
 * @method {private} loadUserDetails
 * @method {public} getUsersByTenant
 * @method {public} updateUserImage
 */
class UserService {
  /**
   * Method to get details of a user
   *
   * @param  {UUID} userId
   * @param  {Function} getDetailsCB
   */
  getUserDetails(userId, getDetailsCB) {
    let user, role;
    async.waterfall([
      async.apply(userDao.findUserById, userId),
      (result, passRoleCB) => {
        user = result;
        return passRoleCB(null, result.roleId);
      },
      roleService.getRoleById,
      (result, passImageCB) => {
        role = result;
        return passImageCB(null, user.imageId);
      },
      imageService.getImageById
    ], (waterfallErr, image) => {
      if (waterfallErr) {
        return getDetailsCB(waterfallErr);
      }
      user.dataValues.role = role;
      user.dataValues.userImage = image;
      return getDetailsCB(null, user);
    });
  }
  /**
   * Method to get user for Authentication
   *
   * @param  {String} email
   * @param  {String} password
   * @param  {Function} getUserCB
   */
  getUser(email, password, getUserCB) {
    userDao.getUserByCredentials(email, password, (getErr, user) => {
      if (getErr) {
        return getUserCB(getErr);
      }
      return getUserCB(null, user);
    });
  }
  /**
   * Method to signup user for web tenant
   *
   * @param  {Object} user
   * @param  {Function} signupCB
   */
  signupUser(user, signupCB) {
    const id = uuidv4();
    user = {
      id,
      ...user,
      roleId: uuid.GIS_USER,
      createdBy: id,
      parentId: uuid.GIS_ADMIN,
      tenantId: uuid.GIS_TENANT
    };
    this.addUser(user, (addErr, result) => {
      if (addErr) {
        return signupCB(addErr);
      }
      return signupCB(null, result);
    });
  }
  /**
   * Method to create default image and add a new user
   *
   * @param  {Object} user
   * @param  {Function} addCB
   */
  addUser(user, addCB) {
    async.waterfall([
      async.apply(imageService.createDefaultImage, constant.USER),
      (image, passIdCB) => {
        user.imageId = image.id;
        return passIdCB(null, user);
      },
      userDao.createUser
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return addCB(waterfallErr);
      }
      return addCB(null, result);
    });
  }
  /**
   * Method to update user
   *
   * @param  {Object} user
   * @param  {Function} updateCB
   */
  updateUserById(user, updateCB) {
    userDao.updateUser(user, (userErr, result) => {
      if (userErr) {
        return updateCB(userErr);
      }
      return updateCB(null, result);
    });
  }
  /**
   * Method to get users by role id
   *
   * @param  {UUID} roleId
   * @param  {Function} getUsersCB
   */
  getUsersByRole(roleId, getUsersCB) {
    const query = {
      where: { roleId }
    };
    userDao.getUsersByQuery(query, (userErr, users) => {
      if (userErr) {
        return getUsersCB(userErr);
      }
      return getUsersCB(null, users);
    });
  }
  /**
   * Method to load User Details for the list of users
   *
   * @param  {Array} users
   * @param  {Function} loadDetailsCB
   */
  static loadUserDetails(users, loadDetailsCB) {
    async.map(users, (user, asyncCB) => {
      async.parallel({
        createdBy: userDao.findUserById.bind(null, user.createdBy),
        parentId: userDao.findUserById.bind(null, user.parentId),
        role: roleService.getRoleById.bind(null, user.roleId)
      }, (parallelErr, result) => {
        if (parallelErr) {
          return asyncCB(parallelErr);
        }
        return asyncCB(null, _.extend(user.dataValues, result));
      });
    }, (mapErr, result) => {
      if (mapErr) {
        return loadDetailsCB(mapErr);
      }
      return loadDetailsCB(null, result);
    });
  }
  /**
   * Method to get User list by Tenant
   *
   * @param  {UUID} tenantId
   * @param  {Function} getUsersCB
   */
  getUsersByTenant(tenantId, getUsersCB) {
    async.waterfall([
      async.apply(userDao.getUsersByQuery, { where: { tenantId } }),
      UserService.loadUserDetails
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getUsersCB(waterfallErr);
      }
      return getUsersCB(null, result);
    });
  }
  /**
   * Method to update user profile image
   *
   * @param  {UUID} userId
   * @param  {File} image
   * @param  {Function} updateUserCB
   */
  updateUserImage(userId, image, updateUserCB) {
    let user;
    async.waterfall([
      async.apply(userDao.findUserById, userId),
      (result, passIdCB) => {
        user = result;
        const dir = `public/images/user/${user.id}`;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        return passIdCB(null, `${dir}/${user.imageId}.${image.mimetype.replace('image/', '')}`);
      },
      image.mv,
      (passPathCB) => (
        passPathCB(null, user.imageId, `/images/user/${user.id}/${user.imageId}.${image.mimetype.replace('image/', '')}`)
      ),
      imageService.updateImagePath
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return updateUserCB(waterfallErr);
      }
      return updateUserCB(null, result);
    });
  }
}

module.exports = UserService;
