/**
 * Service to process functions with VehicleOwner data
 *
 * @exports {Class} VehicleOwnerService
 */
const vehicleOwnerDao = require('../dao/VehicleOwner');

/**
 * VehicleOwnerService class
 *
 * @method {public} getVehicleOwnerForCart
 * @method {public} saveOwnerDetail
 */
let VehicleOwnerService = {};

/**
 * Method to get find vehicle owner by cart id
 *
 * @param  {UUID} cartId
 * @param  {Function} getDetailCB
 */
VehicleOwnerService.getVehicleOwnerForCart = (cartId, getDetailCB) => {
  vehicleOwnerDao.findByCartId(cartId, (findErr, owner) => {
    if (findErr) {
      return getDetailCB(findErr);
    }
    return getDetailCB(null, owner);
  });
};

/**
 * Method to save vehicle owner detail
 *
 * @param  {Object} data
 * @param  {Function} saveCB
 */
VehicleOwnerService.saveOwnerDetail = (data, saveCB) => {
  vehicleOwnerDao.upsertOwnerDetail(data, (detailErr, detail) => {
    if (detailErr) {
      return saveCB(detailErr);
    }
    return saveCB(null, detail);
  });
};

module.exports = VehicleOwnerService;
