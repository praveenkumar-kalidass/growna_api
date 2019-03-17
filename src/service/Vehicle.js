/**
 * Service to process functions with Vehicle data
 *
 * @exports {Class} VehicleService
 */
const VehicleDao = require('../dao/Vehicle');
const vehicleDao = new VehicleDao();

/**
 * VehicleService class
 *
 * @method {public} getVehicle
 * @method {public} getVehicleList
 */
class VehicleService {
  /**
   * Method to get vehicle based on specifications
   *
   * @param  {Object} data
   * @param  {Function} getCB
   */
  getVehicle(data, getCB) {
    vehicleDao.findVehicle(data, (findErr, vehicle) => {
      if (findErr) {
        return getCB(findErr);
      }
      return getCB(null, vehicle);
    });
  }
  /**
   * Method to get vehicle list
   *
   * @param  {String} name
   * @param  {Object} data
   * @param  {Function} getListCB
   */
  getVehicleList(name, data, getListCB) {
    vehicleDao.findVehicleList(name, data, (findErr, list) => {
      if (findErr) {
        return getListCB(findErr);
      }
      return getListCB(null, list);
    });
  }
}

module.exports = VehicleService;
