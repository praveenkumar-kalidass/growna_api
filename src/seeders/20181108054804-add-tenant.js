'use strict';
const uuidv4 = require('uuid/v4');

/**
 * Add new Tenant
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Tenant', [{
      id: uuidv4({
        random: [
          0x45, 0x84, 0x37, 0xca, 0xb8, 0xbf, 0x48, 0xcc,
          0x85, 0xc9, 0xab, 0xf5, 0x23, 0x8e, 0x47, 0x95
        ]
      }),
      name: 'GROWNA INSURANCE SERVICE'
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Tenant', null, {});
  }
};
