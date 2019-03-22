/**
 * Dao to fetch VehicleDetail data
 *
 * @exports {Class} VehicleDetailDao
 */
const models = require('../models');

/**
 * VehicleDetailDao class
 *
 * @method {public} upsertVehicleDetail
 */
class VehicleDetailDao {
  /**
   * Method to update or insert Vehicle Detail
   *
   * @param  {Object} data
   * @param  {Function} upsertCB
   */
  upsertVehicleDetail(data, upsertCB) {
    models.VehicleDetail.upsert(data, {
      returning: true
    }).then((detail) => (
      upsertCB(null, detail)
    ), (upsertErr) => (
      upsertCB(upsertErr)
    ));
  }
}

module.exports = VehicleDetailDao;
