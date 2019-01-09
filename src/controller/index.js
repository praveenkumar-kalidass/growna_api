/**
 * Index Controller to get all routes with index "/api"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const authController = require('./Auth');
const userController = require('./User');

/**
 * Route - "/api/auth/*"
 *
 * @params {Class} authController
 */
router.use('/auth', authController);

/**
 * Route - "/api/user/*"
 *
 * @params {Class} userController
 */
router.use('/user', userController);

module.exports = router;
