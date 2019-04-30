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
const permissionController = require('./Permission');
const privilegeController = require('./Privilege');
const quotationController = require('./Quotation');
const vehicleController = require('./Vehicle');
const cartController = require('./Cart');
const addressController = require('./Address');
const vehicleOwnerController = require('./VehicleOwner');
const vehicleDetailController = require('./VehicleDetail');
const pastPolicyController = require('./PastPolicy');
const companyController = require('./Company');
const vehicleRtaController = require('./VehicleRta');
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

/**
 * Middleware - "/api/permission/*"
 *
 * @param {String} route
 * @param {Class} permissionController
 */
router.use('/permission', permissionController);

/**
 * Middleware - "/api/privilege/*"
 *
 * @param {String} route
 * @param {Class} privilegeController
 */
router.use('/privilege', privilegeController);

/**
 * Middleware - "/api/quotation/*"
 *
 * @param {String} route
 * @param {Class} quotationController
 */
router.use('/quotation', quotationController);

/**
 * Middleware - "/api/vehicle/*"
 *
 * @param {String} route
 * @param {Class} vehicleController
 */
router.use('/vehicle', vehicleController);

/**
 * Middleware - "/api/cart/*"
 *
 * @param {String} route
 * @param {Class} cartController
 */
router.use('/cart', cartController);

/**
 * Middleware - "/api/address/*"
 *
 * @param {String} route
 * @param {Class} addressController
 */
router.use('/address', addressController);

/**
 * Middleware - "/api/vehile-owner/*"
 *
 * @param {String} route
 * @param {Class} vehicleOwnerController
 */
router.use('/vehicle-owner', vehicleOwnerController);

/**
 * Middleware - "/api/vehicle-detail/*"
 *
 * @param {String} route
 * @param {Class} vehicleDetailController
 */
router.use('/vehicle-detail', vehicleDetailController);

/**
 * Middleware - "/api/past-policy/*"
 *
 * @param {String} route
 * @param {Class} pastPolicyController
 */
router.use('/past-policy', pastPolicyController);

/**
 * Middleware - "/api/company/*"
 *
 * @param {String} route
 * @param {Class} companyController
 */
router.use('/company', companyController);

/**
 * Middleware - "/api/vehicle-rta/*"
 *
 * @param {String} route
 * @param {Class} vehicleRtaController
 */
router.use('/vehicle-rta', vehicleRtaController);

module.exports = router;
