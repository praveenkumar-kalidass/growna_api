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
          0x32, 0x23, 0x96, 0xba, 0xc6, 0xab, 0x49, 0xbb,
          0xb8, 0xd7, 0xae, 0xc8, 0x49, 0x6d, 0x09, 0x76
        ]
      }),
      description: constant.ADD_TENANT,
      type: 'VIEW'
    }, {
      id: uuidv4({
        random: [
          0x62, 0x79, 0x13, 0xed, 0xf2, 0xbd, 0x45, 0xae,
          0xa1, 0xc5, 0xcd, 0xb9, 0x82, 0x0c, 0x47, 0x51
        ]
      }),
      description: constant.ADD_USER,
      type: 'VIEW'
    }, {
      id: uuidv4({
        random: [
          0x68, 0x97, 0x02, 0xca, 0xe9, 0xbc, 0xa9, 0xca,
          0x24, 0xf5, 0xaf, 0xa8, 0x56, 0x0e, 0x67, 0x32
        ]
      }),
      description: constant.INSURANCE,
      type: 'VIEW'
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Privilege', null, {});
  }
};
