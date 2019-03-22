/**
 * Dao to fetch Address data
 *
 * @exports {Class} AddressDao
 */
const models = require('../models');

/**
 * AddressDao class
 *
 * @method {public} upsertAddress
 */
class AddressDao {
  /**
   * Method to update or insert Address
   *
   * @param  {Object} data
   * @param  {Function} upsertCB
   */
  upsertAddress(data, upsertCB) {
    models.Address.upsert(data, {
      returning: true
    }).then((address) => (
      upsertCB(null, address)
    ), (upsertErr) => (
      upsertCB(upsertErr)
    ));
  }
}

module.exports = AddressDao;
