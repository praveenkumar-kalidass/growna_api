/**
 * Dao to fetch Vehicle data
 *
 * @exports {Class} VehicleDao
 */
const models = require('../models');

/**
 * VehicleDao class
 *
 * @method {public} findVehicle
 * @method {public} findVehicleList
 */
let VehicleDao = {};

/**
 * Dao to find vehicle by query
 *
 * @param  {Object} data
 * @param  {Function} findCB
 */
VehicleDao.findVehicle = (data, findCB) => {
  models.Vehicle.find({
    where: {
      brand: data.brand,
      model: data.model,
      variant: data.variant
    }
  }).then((vehicle) => (
    findCB(null, vehicle)
  ), (findErr) => (
    findCB(findErr)
  ));
};

/**
 * Dao to find vehicle list
 *
 * @param  {String} name
 * @param  {Object} where
 * @param  {Function} findCB
 */
VehicleDao.findVehicleList = (name, where, findCB) => {
  let attributes = [name], group = [name];
  if (name === 'variant') {
    attributes.push('engineCc');
    group.push('engineCc');
  }
  models.Vehicle.findAll({
    attributes: attributes,
    where: where,
    group: group
  }).then((list) => (
    findCB(null, list)
  ), (findErr) => (
    findCB(findErr)
  ));
};

module.exports = VehicleDao;
