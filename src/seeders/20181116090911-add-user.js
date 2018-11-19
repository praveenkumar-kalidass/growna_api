'use strict';
const uuidv4 = require('uuid/v4');

/**
 * Add sample Users - Admin, User
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      id: uuidv4(),
      first_name: 'DEMO_ADMIN',
      last_name: 'GIS',
      role_id: '108243ae-d3ff-40db-b4e7-efc2390b5827',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: uuidv4(),
      first_name: 'DEMO_USER',
      last_name: 'GIS',
      role_id: '543529bf-f5dc-44ec-a3e7-aaa4721e5640',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
