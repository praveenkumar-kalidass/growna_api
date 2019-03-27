/**
 * Service to process functions with VehicleDetail data
 *
 * @exports {Class} VehicleDetailService
 */
const VehicleDetailDao = require('../dao/VehicleDetail');
const vehicleDetailDao = new VehicleDetailDao();

/**
 * VehicleDetailService class
 *
 * @method {public} getVehicleForCart
 * @method {public} saveVehicleDetail
 */
class VehicleDetailService {
  /**
   * Method to get vehicle for cart
   *
   * @param  {UUID} cartId
   * @param  {Function} getVehicleCB
   */
  getVehicleForCart(cartId, getVehicleCB) {
    vehicleDetailDao.findByCartId(cartId, (findErr, vehicle) => {
      if (findErr) {
        return getVehicleCB(findErr);
      }
      return getVehicleCB(null, vehicle);
    });
  }
  /**
   * Method to save Vehicle Detail
   *
   * @param  {Object} data
   * @param  {Function} saveCB
   */
  saveVehicleDetail(data, saveCB) {
    vehicleDetailDao.upsertVehicleDetail(data, (detailErr, detail) => {
      if (detailErr) {
        return saveCB(detailErr);
      }
      return saveCB(null, detail);
    });
  }
}

module.exports = VehicleDetailService;
