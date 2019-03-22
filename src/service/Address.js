/**
 * Service to process functions with Address data
 *
 * @exports {Class} AddressService
 */
const AddressDao = require('../dao/Address');
const addressDao = new AddressDao();

/**
 * AddressService class
 *
 * @method {public} saveAddress
 */
class AddressService {
  /**
   * Method to save address
   *
   * @param  {Object} data
   * @param  {Function} saveCB
   */
  saveAddress(data, saveCB) {
    addressDao.upsertAddress(data, (saveErr, address) => {
      if (saveErr) {
        return saveCB(saveErr);
      }
      return saveCB(null, address);
    });
  }
}

module.exports = AddressService;
