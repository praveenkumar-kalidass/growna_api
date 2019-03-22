/**
 * Service to process functions with PastPolicy data
 *
 * @exports {Class} PastPolicyService
 */
const PastPolicyDao = require('../dao/PastPolicy');
const pastPolicyDao = new PastPolicyDao();

/**
 * PastPolicyService class
 *
 * @method {public} savePolicy
 */
class PastPolicyService {
  /**
   * Method to save past policy detail
   *
   * @param  {Object} data
   * @param  {Function} saveCB
   */
  savePolicy(data, saveCB) {
    pastPolicyDao.upsertPolicy(data, (saveErr, policy) => {
      if (saveErr) {
        return saveCB(saveErr);
      }
      return saveCB(null, policy);
    });
  }
}

module.exports = PastPolicyService;
