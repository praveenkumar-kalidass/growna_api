const express = require('express');
const router = express.Router();
const userController = require('./User');

router.use('/user', userController);

module.exports = router;
