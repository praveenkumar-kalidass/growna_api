'use strict';
const uuidv4 = require('uuid/v4');
const passwordHash = require('password-hash');
const uuid = require('../utils/uuid');

/**
 * Add sample Users - SuperAdmin, Admin, User
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('User', [{
      id: uuidv4({
        random: [
          0xcd, 0x0d, 0xb6, 0xaa, 0x2b, 0x26, 0x49, 0xab,
          0xa1, 0xdb, 0xac, 0x56, 0xcc, 0x89, 0x38, 0xc1
        ]
      }),
      first_name: 'SuperAdmin',
      last_name: 'Demo',
      email: 'demo_super_admin@gis.com',
      password: passwordHash.generate('gissuperadmin@123'),
      role_id: uuid.GIS_SUPER_ADMIN,
      created_by: uuid.DEMO_SUPER_ADMIN,
      parent_id: uuid.DEMO_SUPER_ADMIN,
      tenant_id: 'd1c3c618-eb42-4e53-906a-b6abbb861e49'
    }, {
      id: uuidv4({
        random: [
          0xaf, 0x45, 0x9d, 0x92, 0x09, 0xa0, 0x43, 0xd9,
          0xb0, 0x67, 0x59, 0x75, 0x80, 0x82, 0x03, 0x75
        ]
      }),
      first_name: 'Admin',
      last_name: 'Demo',
      email: 'demo_admin@gis.com',
      password: passwordHash.generate('gisadmin@123'),
      role_id: uuid.GIS_ADMIN,
      created_by: uuid.DEMO_ADMIN,
      parent_id: uuid.DEMO_SUPER_ADMIN,
      tenant_id: uuid.GIS_TENANT
    }, {
      id: uuidv4({
        random: [
          0x7e, 0x08, 0x03, 0xcf, 0x11, 0x43, 0x41, 0x04,
          0x83, 0x53, 0x85, 0x0d, 0x5a, 0x6b, 0x52, 0xa4
        ]
      }),
      first_name: 'User',
      last_name: 'Demo',
      email: 'demo_user@gis.com',
      password: passwordHash.generate('gisuser@123'),
      role_id: uuid.GIS_USER,
      created_by: uuid.DEMO_USER,
      parent_id: uuid.DEMO_ADMIN,
      tenant_id: uuid.GIS_TENANT
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
