/**
 * Service to process functions with Quotation data
 *
 * @exports {Class} QuotationService
 */
const async = require('async');
const quotationDao = require('../dao/Quotation');
const planService = require('../service/Plan');

/**
 * QuotationService class
 *
 * @method {public} saveQuotation
 * @method {public} getPlansByQuotation
 * @method {public} getQuotation
 * @method {public} editQuotation
 */
let QuotationService = {};

/**
 * Method to save quotation request
 *
 * @param  {Object} data
 * @param  {Function} saveCB
 */
QuotationService.saveQuotation = (data, saveCB) => {
  async.waterfall([
    async.apply(planService.getPlanByQuotation, data),
    (plan, mergeDataCB) => (
      mergeDataCB(null, {
        ...data,
        standardIdv: plan.insuredDeclaredValue
      })
    ),
    quotationDao.createQuotation
  ], (waterfallErr, quotation) => {
    if (waterfallErr) {
      return saveCB(waterfallErr);
    }
    return saveCB(null, quotation);
  });
};

/**
 * Method to get plans by quotation
 *
 * @param  {UUID} id
 * @param  {Function} getPlansCB
 */
QuotationService.getPlansByQuotation = (id, getPlansCB) => {
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
};

/**
 * Method to get quotation by ID
 *
 * @param  {UUID} id
 * @param  {Function} getCB
 */
QuotationService.getQuotation = (id, getCB) => {
  quotationDao.findQuotationById(id, (quotationErr, quotation) => {
    if (quotationErr) {
      return getCB(quotationErr);
    }
    return getCB(null, quotation);
  });
};

/**
 * Method to edit quotation details
 *
 * @param  {Object} data
 * @param  {Function} saveCB
 */
QuotationService.editQuotation = (data, editCB) => {
  let result;
  async.waterfall([
    async.apply(quotationDao.updateQuotation, data),
    (quotation, passDataCB) => {
      result = quotation;
      return passDataCB(null, quotation);
    },
    planService.getPlans
  ], (waterfallErr, plans) => {
    if (waterfallErr) {
      return editCB(waterfallErr);
    }
    result.dataValues = {
      ...result.dataValues,
      plans
    };
    return editCB(null, result);
  });
};

module.exports = QuotationService;
