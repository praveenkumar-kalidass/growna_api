'use strict';
const uuidv4 = require('uuid/v4');
const uuid = require('../utils/uuid');
const constant = require('../utils/constant');

/**
 * Add new roles - Admin, User
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Role', [{
      id: uuidv4({
        random: [
          0x56, 0x23, 0x34, 0xdb, 0xd8, 0xaf, 0x49, 0xee,
          0x93, 0xb4, 0xfe, 0xc0, 0x31, 0x8b, 0x48, 0x18
        ]
      }),
      name: constant.GIS_SUPER_ADMIN,
      type: constant.WEB,
      parent_id: uuid.GIS_SUPER_ADMIN,
      tenant_id: 'd1c3c618-eb42-4e53-906a-b6abbb861e49'
    }, {
      id: uuidv4({
        random: [
          0x10, 0x82, 0x43, 0xae, 0xd3, 0xff, 0x40, 0xdb,
          0xb4, 0xe7, 0xef, 0xc2, 0x39, 0x0b, 0x58, 0x27
        ]
      }),
      name: constant.GIS_ADMIN,
      type: constant.WEB,
      parent_id: uuid.GIS_SUPER_ADMIN,
      tenant_id: uuid.GIS_TENANT
    }, {
      id: uuidv4({
        random: [
          0x54, 0x35, 0x29, 0xbf, 0xf5, 0xdc, 0x44, 0xec,
          0xa3, 0xe7, 0xaa, 0xa4, 0x72, 0x1e, 0x56, 0x40
        ]
      }),
      name: constant.GIS_USER,
      type: constant.WEB,
      parent_id: uuid.GIS_ADMIN,
      tenant_id: uuid.GIS_TENANT
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Role', null, {});
  }
};
