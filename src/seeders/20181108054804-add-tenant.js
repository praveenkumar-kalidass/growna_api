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
          0xd1, 0xc3, 0xc6, 0x18, 0xeb, 0x42, 0x4e, 0x53,
          0x90, 0x6a, 0xb6, 0xab, 0xbb, 0x86, 0x1e, 0x49
        ]
      }),
      name: 'GROWNA SUPER ADMIN'
    }, {
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
