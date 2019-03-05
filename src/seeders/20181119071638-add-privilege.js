'use strict';
const uuidv4 = require('uuid/v4');
const constant = require('../utils/constant');

/**
 * Add privileges
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Privilege', [{
      id: uuidv4({
        random: [
          0x91, 0xe4, 0x05, 0x91, 0x54, 0x36, 0x4d, 0x4f,
          0xa1, 0x3e, 0xd2, 0x27, 0x82, 0x97, 0x51, 0xc0
        ]
      }),
      description: constant.USER_PROFILE,
      type: constant.ROUTE,
      scope: constant.EVERYONE
    }, {
      id: uuidv4({
        random: [
          0x32, 0x23, 0x96, 0xba, 0xc6, 0xab, 0x49, 0xbb,
          0xb8, 0xd7, 0xae, 0xc8, 0x49, 0x6d, 0x09, 0x76
        ]
      }),
      description: constant.ADD_TENANT,
      type: constant.VIEW,
      scope: constant.GIS_SUPER_ADMIN
    }, {
      id: uuidv4({
        random: [
          0x62, 0x79, 0x13, 0xed, 0xf2, 0xbd, 0x45, 0xae,
          0xa1, 0xc5, 0xcd, 0xb9, 0x82, 0x0c, 0x47, 0x51
        ]
      }),
      description: constant.ADD_USER,
      type: constant.VIEW,
      scope: constant.GIS_ADMIN
    }, {
      id: uuidv4({
        random: [
          0x87, 0x32, 0x05, 0x43, 0xe2, 0xf5, 0x4e, 0x17,
          0xb6, 0xa1, 0x68, 0x98, 0xe4, 0x0d, 0xa1, 0x20
        ]
      }),
      description: constant.ADD_ROLE,
      type: constant.VIEW,
      scope: constant.GIS_ADMIN
    }, {
      id: uuidv4({
        random: [
          0xe1, 0xea, 0xaa, 0xb3, 0x87, 0x07, 0x44, 0x36,
          0xb2, 0xa0, 0x3c, 0x35, 0xd4, 0x14, 0x1b, 0xd7
        ]
      }),
      description: constant.USER_LIST,
      type: constant.VIEW,
      scope: constant.GIS_ADMIN
    }, {
      id: uuidv4({
        random: [
          0x6d, 0xca, 0x5c, 0x2e, 0x2f, 0x5f, 0x40, 0x03,
          0x93, 0x57, 0x69, 0xc1, 0xa9, 0xcf, 0xd7, 0x69
        ]
      }),
      description: constant.ROLE_LIST,
      type: constant.VIEW,
      scope: constant.GIS_ADMIN
    }, {
      id: uuidv4({
        random: [
          0x0b, 0x86, 0x83, 0x83, 0xa1, 0x1c, 0x44, 0x68,
          0x99, 0x7b, 0x27, 0x9d, 0x0e, 0xf0, 0xb4, 0x8b
        ]
      }),
      description: constant.EDIT_ROLE,
      type: constant.ROUTE,
      scope: constant.GIS_ADMIN
    }, {
      id: uuidv4({
        random: [
          0x68, 0x97, 0x02, 0xca, 0xe9, 0xbc, 0xa9, 0xca,
          0x24, 0xf5, 0xaf, 0xa8, 0x56, 0x0e, 0x67, 0x32
        ]
      }),
      description: constant.INSURANCE,
      type: constant.VIEW,
      scope: constant.GIS_USER
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Privilege', null, {});
  }
};
