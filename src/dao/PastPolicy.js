/**
 * Dao to fetch PastPolicy data
 *
 * @exports {Class} PastPolicyDao
 */
const models = require('../models');

/**
 * PastPolicyDao class
 *
 * @method {public} findByCartId
 * @method {public} upsertPolicy
 */
class PastPolicyDao {
  /**
   * Method to find past policy by cart id
   *
   * @param  {UUID} cartId
   * @param  {Function} findCB
   */
  findByCartId(cartId, findCB) {
    models.PastPolicy.find({
      where: {cartId}
    }).then((policy) => (
      findCB(null, policy)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
  /**
   * Method to update or insert past policy detail
   *
   * @param  {Object} data
   * @param  {Function} upsertCB
   */
  upsertPolicy(data, upsertCB) {
    models.PastPolicy.upsert(data, {
      returning: true
    }).then(([policy]) => (
      upsertCB(null, policy)
    ), (upsertErr) => (
      upsertCB(upsertErr)
    ));
  }
}

module.exports = PastPolicyDao;
