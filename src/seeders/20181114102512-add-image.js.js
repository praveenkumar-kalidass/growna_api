'use strict';
const uuidv4 = require('uuid/v4');
const constant = require('../utils/constant');

/**
 * Add Default Image
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Image', [{
      id: uuidv4({
        random: [
          0xea, 0x14, 0x29, 0x93, 0xf9, 0xc5, 0x4f, 0x30,
          0xa1, 0xd4, 0xb4, 0xca, 0x84, 0xe7, 0x9e, 0xf7
        ]
      }),
      path: '/images/default-image.png',
      type: constant.DEFAULT
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Image', null, {});
  }
};
