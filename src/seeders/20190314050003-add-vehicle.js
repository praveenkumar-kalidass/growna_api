'use strict';
const uuidv4 = require('uuid/v4');
const constant = require('../utils/constant');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Vehicle', [{
      id: uuidv4(),
      brand: 'Yamaha',
      model: 'Saluto',
      variant: 'RX',
      engine_cc: 110,
      type: constant.BIKE
    }, {
      id: uuidv4(),
      brand: 'Yamaha',
      model: 'Saluto',
      variant: 'STD',
      engine_cc: 125,
      type: constant.BIKE
    }, {
      id: uuidv4(),
      brand: 'Yamaha',
      model: 'Saluto',
      variant: 'Disc Brake',
      engine_cc: 125,
      type: constant.BIKE
    }, {
      id: uuidv4(),
      brand: 'Yamaha',
      model: 'Saluto',
      variant: 'RX STD',
      engine_cc: 110,
      type: constant.BIKE
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Vehicle', null, {});
  }
};
