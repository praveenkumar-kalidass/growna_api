/**
 * Service to process functions with Invoice data
 *
 * @exports {Class} InvoiceService
 */
const invoiceDao = require('../dao/Invoice');

/**
 * InvoiceService Class
 *
 * @method {public} saveInvoice
 */
let InvoiceService = {};

/**
 * Method to save invoice details
 *
 * @param  {Object} data
 * @param  {Function} saveCB
 */
InvoiceService.saveInvoice = (data, saveCB) => {
  invoiceDao.upsertInvoice(data, (upsertErr, invoice) => {
    if (upsertErr) {
      return saveCB(upsertErr);
    }
    return saveCB(null, invoice);
  });
};

module.exports = InvoiceService;
