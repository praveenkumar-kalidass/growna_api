/**
 * Dao to fetch VehicleDetail data
 *
 * @exports {Class} VehicleDetailDao
 */
const models = require('../models');

/**
 * VehicleDetailDao class
 *
 * @method {public} findByCartId
 * @method {public} upsertVehicleDetail
 */
let VehicleDetailDao = {};

/**
 * Method to find vehicle detail by cart id
 *
 * @param  {UUID} cartId
 * @param  {Function} findCB
 */
VehicleDetailDao.findByCartId = (cartId, findCB) => {
  models.VehicleDetail.find({
    where: {cartId}
  }).then((detail) => (
    findCB(null, detail)
  ), (findErr) => (
    findCB(findErr)
  ));
};

/**
 * Method to update or insert Vehicle Detail
 *
 * @param  {Object} data
 * @param  {Function} upsertCB
 */
VehicleDetailDao.upsertVehicleDetail = (data, upsertCB) => {
  models.VehicleDetail.upsert(data, {
    returning: true
  }).then(([detail]) => (
    upsertCB(null, detail)
  ), (upsertErr) => (
    upsertCB(upsertErr)
  ));
};

module.exports = VehicleDetailDao;
