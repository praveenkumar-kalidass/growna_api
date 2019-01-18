'use strict';
const uuidv4 = require('uuid/v4');

/**
 * Add permissions for sample users
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Permission', [{
      id: uuidv4(),
      role_id: '108243ae-d3ff-40db-b4e7-efc2390b5827',
      privilege_id: '627913ed-f2bd-45ae-a1c5-cdb9820c4751'
    }, {
      id: uuidv4(),
      role_id: '543529bf-f5dc-44ec-a3e7-aaa4721e5640',
      privilege_id: '689702ca-e9bc-49ca-a4f5-afa8560e6732'
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Permission', null, {});
  }
};
