/**
 * Dao to fetch VehicleOwner data
 *
 * @exports {Class} VehicleOwnerDao
 */
const models = require('../models');

/**
 * VehicleOwnerDao class
 *
 * @method {public} upsertOwnerDetail
 */
class VehicleOwnerDao {
  /**
   * Method to update or insert Vehicle Owner Detail
   *
   * @param  {Object} data
   * @param  {Function} upsertCB
   */
  upsertOwnerDetail(data, upsertCB) {
    models.VehicleOwner.upsert(data, {
      returning: true
    }).then((detail) => (
      upsertCB(null, detail)
    ), (upsertErr) => (
      upsertCB(upsertErr)
    ));
  }
}

module.exports = VehicleOwnerDao;
