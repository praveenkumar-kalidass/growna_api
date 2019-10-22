/**
 * Service to process functions with VehicleRta data
 *
 * @exports {Class} VehicleRtaService
 */
const vehicleRtaDao = require('../dao/VehicleRta');

/**
 * VehicleRtaService class
 *
 * @method {public} savePolicy
 */
let VehicleRtaService = {};

/**
 * Method to get all rta code
 *
 * @param  {Function} getAllCB
 */
VehicleRtaService.getAllRta = (getAllCB) => {
  vehicleRtaDao.findAllVehicleRta((getErr, result) => {
    if (getErr) {
      return getAllCB(getErr);
    }
    return getAllCB(null, result);
  });
};

module.exports = VehicleRtaService;
