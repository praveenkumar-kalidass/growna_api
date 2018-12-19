'use strict';
const uuidv4 = require('uuid/v4');

/**
 * Add privileges
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Privilege', [{
      id: uuidv4({
        random: [
          0x62, 0x79, 0x13, 0xed, 0xf2, 0xbd, 0xe5, 0xae,
          0x21, 0xc5, 0xcd, 0xb9, 0x82, 0x0c, 0x47, 0x51
        ]
      }),
      description: 'ADMIN',
      type: 'ROUTE'
    }, {
      id: uuidv4({
        random: [
          0x68, 0x97, 0x02, 0xca, 0xe9, 0xbc, 0xa9, 0xca,
          0x24, 0xf5, 0xaf, 0xa8, 0x56, 0x0e, 0x67, 0x32
        ]
      }),
      description: 'USER',
      type: 'ROUTE'
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Privilege', null, {});
  }
};
