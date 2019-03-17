/**
 * Dao to fetch Vehicle data
 *
 * @exports {Class} VehicleDao
 */
const models = require('../models');
const _ = require('lodash');

/**
 * VehicleDao class
 *
 * @method {public} findVehicle
 * @method {public} findVehicleList
 */
class VehicleDao {
  /**
   * Dao to find vehicle by query
   *
   * @param  {Object} data
   * @param  {Function} findCB
   */
  findVehicle(data, findCB) {
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
  }
  /**
   * Dao to find vehicle list
   *
   * @param  {String} name
   * @param  {Object} where
   * @param  {Function} findCB
   */
  findVehicleList(name, where, findCB) {
    models.Vehicle.findAll({
      attributes: [name],
      where: where,
      group: [name]
    }).then((list) => (
      findCB(null, _.map(list, name))
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = VehicleDao;
