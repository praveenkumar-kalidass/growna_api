/**
 * Service to process functions with PastPolicy data
 *
 * @exports {Class} PastPolicyService
 */
const pastPolicyDao = require('../dao/PastPolicy');

/**
 * PastPolicyService class
 *
 * @method {public} getPastPolicyForCart
 * @method {public} savePolicy
 */
let PastPolicyService = {};

/**
 * Method to get past policy detail for cart
 *
 * @param  {UUID} cartId
 * @param  {Function} getPolicyCB
 */
PastPolicyService.getPastPolicyForCart = (cartId, getPolicyCB) => {
  pastPolicyDao.findByCartId(cartId, (findErr, policy) => {
    if (findErr) {
      return getPolicyCB(findErr);
    }
    return getPolicyCB(null, policy);
  });
};

/**
 * Method to save past policy detail
 *
 * @param  {Object} data
 * @param  {Function} saveCB
 */
PastPolicyService.savePolicy = (data, saveCB) => {
  pastPolicyDao.upsertPolicy(data, (saveErr, policy) => {
    if (saveErr) {
      return saveCB(saveErr);
    }
    return saveCB(null, policy);
  });
};

module.exports = PastPolicyService;
