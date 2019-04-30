/**
 * Service to process functions with VehicleRta data
 *
 * @exports {Class} VehicleRtaService
 */
const VehicleRtaDao = require('../dao/VehicleRta');
const vehicleRtaDao = new VehicleRtaDao();

/**
 * VehicleRtaService class
 *
 * @method {public} savePolicy
 */
class VehicleRtaService {
  /**
   * Method to get all rta code
   *
   * @param  {Function} getAllCB
   */
  getAllRta(getAllCB) {
    vehicleRtaDao.findAllVehicleRta((getErr, result) => {
      if (getErr) {
        return getAllCB(getErr);
      }
      return getAllCB(null, result);
    });
  }
}

module.exports = VehicleRtaService;
