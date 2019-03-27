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
 * @method {public} findCompanyById
 */
class CompanyDao {
  /**
   * Dao to get companies list
   *
   * @param  {String} type
   * @param  {String} attributes
   * @param  {Function} findCB
   */
  findAllCompanies(type, attributes, findCB) {
    models.Company.findAll({
      attributes,
      where: {type}
    }).then((companies) => (
      findCB(null, companies)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
  /**
   * Method to find company by ID
   *
   * @param  {UUID} id
   * @param  {Function} findCB
   */
  findCompanyById(id, findCB) {
    models.Company.findById(id).then((company) => (
      findCB(null, company)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = CompanyDao;
