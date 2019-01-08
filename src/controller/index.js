/**
 * Index Controller to get all routes with index "/api"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const authController = require('./Auth');
const userController = require('./User');

router.use('/auth', authController);
router.use('/user', userController);

module.exports = router;
