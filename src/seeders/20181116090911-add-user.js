'use strict';
const uuidv4 = require('uuid/v4');
const passwordHash = require('password-hash');
const constant = require('../utils/constant');

/**
 * Add sample Users - SuperAdmin, Admin, User
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('User', [{
      id: uuidv4(),
      first_name: 'SuperAdmin',
      last_name: 'Demo',
      email: 'demo_super_admin@gis.com',
      password: passwordHash.generate('gissuperadmin@123'),
      role_id: constant.GIS_SUPER_ADMIN,
      created_by: constant.GIS_SUPER_ADMIN,
      parent_id: constant.GIS_SUPER_ADMIN,
      tenant_id: constant.GIS_TENANT
    }, {
      id: uuidv4(),
      first_name: 'Admin',
      last_name: 'Demo',
      email: 'demo_admin@gis.com',
      password: passwordHash.generate('gisadmin@123'),
      role_id: constant.GIS_ADMIN,
      created_by: constant.GIS_ADMIN,
      parent_id: constant.GIS_SUPER_ADMIN,
      tenant_id: constant.GIS_TENANT
    }, {
      id: uuidv4(),
      first_name: 'User',
      last_name: 'Demo',
      email: 'demo_user@gis.com',
      password: passwordHash.generate('gisuser@123'),
      role_id: constant.GIS_USER,
      created_by: constant.GIS_USER,
      parent_id: constant.GIS_ADMIN
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
