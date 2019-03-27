/**
 * Dao to fetch VehicleOwner data
 *
 * @exports {Class} VehicleOwnerDao
 */
const models = require('../models');

/**
 * VehicleOwnerDao class
 *
 * @method {public} findByCartId
 * @method {public} upsertOwnerDetail
 */
class VehicleOwnerDao {
  /**
   * Method to find VehicleOwner by cart id
   *
   * @param  {UUID} cartId
   * @param  {Function} findCB
   */
  findByCartId(cartId, findCB) {
    models.VehicleOwner.find({
      where: {cartId}
    }).then((vehicleOwner) => (
      findCB(null, vehicleOwner)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
  /**
   * Method to update or insert Vehicle Owner Detail
   *
   * @param  {Object} data
   * @param  {Function} upsertCB
   */
  upsertOwnerDetail(data, upsertCB) {
    models.VehicleOwner.upsert(data, {
      returning: true
    }).then(([detail]) => (
      upsertCB(null, detail)
    ), (upsertErr) => (
      upsertCB(upsertErr)
    ));
  }
}

module.exports = VehicleOwnerDao;
