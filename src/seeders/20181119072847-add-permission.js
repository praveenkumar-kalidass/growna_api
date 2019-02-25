'use strict';
const uuidv4 = require('uuid/v4');
const uuid = require('../utils/uuid');

/**
 * Add permissions for sample users
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Permission', [{
      id: uuidv4(),
      role_id: uuid.GIS_SUPER_ADMIN,
      privilege_id: uuid.ADD_TENANT
    }, {
      id: uuidv4(),
      role_id: uuid.GIS_ADMIN,
      privilege_id: uuid.ADD_USER
    }, {
      id: uuidv4(),
      role_id: uuid.GIS_ADMIN,
      privilege_id: uuid.ADD_ROLE
    }, {
      id: uuidv4(),
      role_id: uuid.GIS_ADMIN,
      privilege_id: uuid.USER_LIST
    }, {
      id: uuidv4(),
      role_id: uuid.GIS_ADMIN,
      privilege_id: uuid.ROLE_LIST
    }, {
      id: uuidv4(),
      role_id: uuid.GIS_USER,
      privilege_id: uuid.INSURANCE
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Permission', null, {});
  }
};
