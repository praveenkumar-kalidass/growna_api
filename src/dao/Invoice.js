/**
 * Dao to fetch Invoice data
 *
 * @exports {Class} InvoiceDao
 */
const models = require('../models');

/**
 * InvoiceDao class
 *
 * @method {public} upsertInvoice
 */
class InvoiceDao {
  /**
   * Method to update/insert new invoice
   *
   * @param  {Object} data
   * @param  {Function} upsertCB
   */
  upsertInvoice(data, upsertCB) {
    models.Invoice.upsert(data, {
      returning: true
    }).then(([invoice]) => (
      upsertCB(null, invoice)
    ), (upsertErr) => (
      upsertCB(upsertErr)
    ));
  }
}

module.exports = InvoiceDao;
