'use strict';
const uuidv4 = require('uuid/v4');
const passwordHash = require('password-hash');

/**
 * Add GIS Client
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Client', [{
      id: uuidv4({
        random: [
          0x11, 0x81, 0x4a, 0x7e, 0x53, 0xfd, 0xa9, 0xdb,
          0x39, 0xe5, 0x69, 0xa4, 0x37, 0x0b, 0x58, 0x27
        ]
      }),
      redirect_uri: 'authenticate'
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Client', null, {});
  }
};
