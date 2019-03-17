/**
 * Dao to fetch Quotation data
 *
 * @exports {Class} QuotationDao
 */
const models = require('../models');

/**
 * QuotationDao class
 *
 * @method {public} createQuotation
 * @method {public} findQuotationById
 */
class QuotationDao {
  /**
   * Dao to create new quotation
   *
   * @param  {Object} data
   * @param  {Function} createCB
   */
  createQuotation(data, createCB) {
    models.Quotation.create(data).then((quotation) => (
      createCB(null, quotation)
    ), (createErr) => (
      createCB(createErr)
    ));
  }
  /**
   * Dao to find quotation by ID
   *
   * @param  {UUID} id
   * @param  {Function} findCB
   */
  findQuotationById(id, findCB) {
    models.Quotation.findById(id).then((quotation) => (
      findCB(null, quotation)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = QuotationDao;
