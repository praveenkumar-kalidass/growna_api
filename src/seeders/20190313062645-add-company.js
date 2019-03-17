'use strict';
const uuidv4 = require('uuid/v4');
const constant = require('../utils/constant');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Company', [{
      id: uuidv4(),
      name: 'ICICI Lombard',
      no_claim_bonus: 1,
      third_party_premium: 1,
      insured_declared_value: 1,
      discount: 30,
      owner_driver: 50,
      type: constant.BIKE
    }, {
      id: uuidv4(),
      name: 'Reliance General Insurance',
      no_claim_bonus: 1,
      third_party_premium: 1,
      insured_declared_value: 1,
      discount: 30,
      owner_driver: 50,
      type: constant.BIKE
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Company', null, {});
  }
};
