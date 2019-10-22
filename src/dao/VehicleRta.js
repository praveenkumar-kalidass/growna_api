/**
 * Dao to fetch VehicleRta data
 *
 * @exports {Class} VehicleRtaDao
 */
const models = require('../models');

/**
 * VehicleRtaDao class
 *
 * @method {public} findAllVehicleRta
 */
let VehicleRtaDao = {};

/**
 * Method to find all rta code
 *
 * @param  {Function} findCB
 */
VehicleRtaDao.findAllVehicleRta = (findCB) => {
  models.VehicleRta.findAll().then((rta) => (
    findCB(null, rta)
  ), (findErr) => (
    findCB(findErr)
  ));
};

module.exports = VehicleRtaDao;
