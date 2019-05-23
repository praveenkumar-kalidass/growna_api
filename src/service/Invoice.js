/**
 * Service to process functions with Invoice data
 *
 * @exports {Class} InvoiceService
 */
const InvoiceDao = require('../dao/Invoice');
const invoiceDao = new InvoiceDao();

/**
 * InvoiceService Class
 *
 * @method {public} saveInvoice
 */
class InvoiceService {
  /**
   * Method to save invoice details
   *
   * @param  {Object} data
   * @param  {Function} saveCB
   */
  saveInvoice(data, saveCB) {
    invoiceDao.upsertInvoice(data, (upsertErr, invoice) => {
      if (upsertErr) {
        return saveCB(upsertErr);
      }
      return saveCB(null, invoice);
    });
  }
}

module.exports = InvoiceService;
