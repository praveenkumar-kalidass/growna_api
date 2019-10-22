/**
 * Service to process functions with Address data
 *
 * @exports {Class} AddressService
 */
const addressDao = require('../dao/Address');

/**
 * AddressService class
 *
 * @method {public} getAddressForCart
 * @method {public} saveAddress
 */
let AddressService = {};

/**
 * Method to get address for cart
 *
 * @param  {UUID} cartId
 * @param  {Function} getAddressCB
 */
AddressService.getAddressForCart = (cartId, getAddressCB) => {
  addressDao.findByCartId(cartId, (findErr, address) => {
    if (findErr) {
      return getAddressCB(findErr);
    }
    return getAddressCB(null, address);
  });
};

/**
 * Method to save address
 *
 * @param  {Object} data
 * @param  {Function} saveCB
 */
AddressService.saveAddress = (data, saveCB) => {
  addressDao.upsertAddress(data, (saveErr, address) => {
    if (saveErr) {
      return saveCB(saveErr);
    }
    return saveCB(null, address);
  });
};

module.exports = AddressService;
