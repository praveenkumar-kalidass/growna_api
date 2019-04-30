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
 * @method {public} updateQuotation
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
  /**
   * Dao to update quotation
   *
   * @param  {Object} data
   * @param  {Function} updateCB
   */
  updateQuotation(data, updateCB) {
    models.Quotation.update(data, {
      where: {
        id: data.id
      },
      returning: true
    }).then(([updated, [quotation]]) => (  // eslint-disable-line no-unused-vars
      updateCB(null, quotation)
    ), (createErr) => (
      updateCB(createErr)
    ));
  }
}

module.exports = QuotationDao;
