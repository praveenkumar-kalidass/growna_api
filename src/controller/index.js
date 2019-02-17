/**
 * Index Controller to get all routes with index "/api"
 *
 * @exports {express} router
 */
const express = require('express');
const authController = require('./Auth');
const tenantController = require('./Tenant');
const roleController = require('./Role');
const userController = require('./User');
const router = express.Router();

/**
 * Middleware - "/api/auth/*"
 *
 * @param {String} route
 * @param {Class} authController
 */
router.use('/auth', authController);

/**
 * Middleware - "/api/tenant/*"
 *
 * @param {String} route
 * @param {Class} tenantController
 */
router.use('/tenant', tenantController);

/**
 * Middleware - "/api/role/*"
 *
 * @param {String} route
 * @param {Class} roleController
 */
router.use('/role', roleController);

/**
 * Middleware - "/api/user/*"
 *
 * @param {String} route
 * @param {Class} userController
 */
router.use('/user', userController);

module.exports = router;
