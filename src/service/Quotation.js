/**
 * Service to process functions with Quotation data
 *
 * @exports {Class} QuotationService
 */
const async = require('async');
const QuotationDao = require('../dao/Quotation');
const PlanService = require('../service/Plan');
const quotationDao = new QuotationDao();
const planService = new PlanService();

/**
 * QuotationService class
 *
 * @method {public} saveQuotation
 * @method {public} getPlansByQuotation
 */
class QuotationService {
  /**
   * Method to save quotation request
   *
   * @param  {Object} data
   * @param  {Function} saveCB
   */
  saveQuotation(data, saveCB) {
    quotationDao.createQuotation(data, (createErr, quotation) => {
      if (createErr) {
        return saveCB(createErr);
      }
      return saveCB(null, quotation);
    });
  }
  /**
   * Method to get plans by quotation
   *
   * @param  {UUID} id
   * @param  {Function} getPlansCB
   */
  getPlansByQuotation(id, getPlansCB) {
    let result;
    async.waterfall([
      async.apply(quotationDao.findQuotationById, id),
      (quotation, passDataCB) => {
        result = quotation;
        return passDataCB(null, quotation);
      },
      planService.getPlans
    ], (waterfallErr, plans) => {
      if (waterfallErr) {
        return getPlansCB(waterfallErr);
      }
      result.dataValues = {
        ...result.dataValues,
        plans
      };
      return getPlansCB(null, result);
    });
  }
}

module.exports = QuotationService;
