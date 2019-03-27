'use strict';
const uuidv4 = require('uuid/v4');
const passwordHash = require('password-hash');

/**
 * Add GIS Client
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Client', [{
      id: uuidv4({
        random: [
          0x11, 0x81, 0x4a, 0x7e, 0x53, 0xfd, 0x49, 0xdb,
          0xb9, 0xe5, 0x69, 0xa4, 0x37, 0x0b, 0x58, 0x27
        ]
      }),
      client_secret: passwordHash.generate('gis_web_client'),
      redirect_uri: 'authorize'
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Client', null, {});
  }
};
