'use strict';
const uuidv4 = require('uuid/v4');
const constant = require('../utils/constant');

/**
 * Add permissions for sample users
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Permission', [{
      id: uuidv4(),
      role_id: constant.GIS_SUPER_ADMIN,
      privilege_id: constant.ADD_TENANT
    }, {
      id: uuidv4(),
      role_id: constant.GIS_ADMIN,
      privilege_id: constant.ADD_USER
    }, {
      id: uuidv4(),
      role_id: constant.GIS_USER,
      privilege_id: constant.INSURANCE
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Permission', null, {});
  }
};
