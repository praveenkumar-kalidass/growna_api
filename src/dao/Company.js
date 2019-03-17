/**
 * Dao to fetch Company data
 *
 * @exports {Class} CompanyDao
 */
const models = require('../models');

/**
 * CompanyDao class
 *
 * @method {public} findAllCompanies
 */
class CompanyDao {
  /**
   * Dao to get companies list
   *
   * @param  {String} type
   * @param  {Function} findCB
   */
  findAllCompanies(type, findCB) {
    models.Company.findAll({type}).then((companies) => (
      findCB(null, companies)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = CompanyDao;
