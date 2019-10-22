/**
 * Dao to fetch Address data
 *
 * @exports {Class} AddressDao
 */
const models = require('../models');

/**
 * AddressDao class
 *
 * @method {public} findByCartId
 * @method {public} upsertAddress
 */
let AddressDao = {};

/**
 * Method to find address by cart id
 *
 * @param  {UUID} cartId
 * @param  {Function} findCB
 */
AddressDao.findByCartId = (cartId, findCB) => {
  models.Address.find({
    where: {cartId}
  }).then((address) => (
    findCB(null, address)
  ), (findErr) => (
    findCB(findErr)
  ));
};

/**
 * Method to update or insert Address
 *
 * @param  {Object} data
 * @param  {Function} upsertCB
 */
AddressDao.upsertAddress = (data, upsertCB) => {
  models.Address.upsert(data, {
    returning: true
  }).then(([address]) => (
    upsertCB(null, address)
  ), (upsertErr) => (
    upsertCB(upsertErr)
  ));
};

module.exports = AddressDao;
