/**
 * Service to process functions with Plan data
 *
 * @exports {Class} PlanService
 */
const async = require('async');
const _ = require('lodash');
const mixin = require('../utils/mixin');
const CompanyService = require('../service/Company');
const PlanDao = require('../dao/Plan');
const companyService = new CompanyService();
const planDao = new PlanDao();

/**
 * PlanService class
 *
 * @method {private} getPlanByQuotation
 * @method {private} getCompanies
 * @method {private} getPlanAndCompanies
 * @method {private} calculatePlans
 * @method {public} getPlans
 * @method {public} loadCartPlan
 */
class PlanService {
  /**
   * Method to get plan based on specifications
   *
   * @param  {Object} quotation
   * @param  {Function} getPlanCB
   */
  static getPlanByQuotation(quotation, getPlanCB) {
    const age = new Date().getFullYear() - quotation.vehicleYear;
    planDao.findPlan(quotation.engineCc, age, quotation.type, (planErr, plan) => {
      if (planErr) {
        return getPlanCB(planErr);
      }
      return getPlanCB(null, plan);
    });
  }
  /**
   * Method to get all companies for vehicle type
   *
   * @param  {String} type
   * @param  {Function} getCB
   */
  static getCompanies(type, getCB) {
    companyService.getAllCompanies(type, null, (getErr, companies) => {
      if (getErr) {
        return getCB(getErr);
      }
      return getCB(null, companies);
    });
  }
  /**
   * Method to get plan and companies based on specifications
   *
   * @param  {Object} data
   * @param  {Function} getCB
   */
  static getPlanAndCompanies(data, getCB) {
    async.parallel({
      plan: PlanService.getPlanByQuotation.bind(null, data),
      companies: PlanService.getCompanies.bind(null, data.type)
    }, (parallelErr, result) => {
      if (parallelErr) {
        return getCB(parallelErr);
      }
      return getCB(null, result);
    });
  }
  /**
   * Method to calculate plans based on company details
   *
   * @param  {Object} quotation
   * @param  {Object} plan
   * @param  {Array} companies
   * @param  {Function} calculateCB
   */
  static calculatePlans(quotation, plan, companies, calculateCB) {
    async.map(companies, (company, asyncCB) => {
      company.dataValues = {
        ...company.dataValues,
        thirdPartyPremium: plan.thirdPartyPremium * company.thirdPartyPremium,
        insuredDeclaredValue: (quotation.insuredDeclaredValue || plan.insuredDeclaredValue) *
          company.insuredDeclaredValue
      };
      const tradeIDV = (company.insuredDeclaredValue * plan.twoRate) / 100;
      const premiumValue = tradeIDV - ((tradeIDV * company.discount) / 100);
      const ownDamagePremium = premiumValue - ((premiumValue * company.noClaimBonus) / 100);
      const premiumAmount = ownDamagePremium + company.thirdPartyPremium + company.ownerDriver;
      const gst = ((premiumValue * 18) / 100);
      return asyncCB(null, _.extend(company.dataValues, {
        oneYearPremium: mixin.round(premiumAmount + gst, 2),
        gst: mixin.round(gst, 2),
        premiumAmount: mixin.round(premiumAmount, 2),
        ownDamagePremium: mixin.round(ownDamagePremium, 2)
      }));
    }, (mapErr, result) => {
      if (mapErr) {
        return calculateCB(mapErr);
      }
      return calculateCB(null, result);
    });
  }
  /**
   * Method to get plans for insurance
   *
   * @param  {Object} data
   * @param  {Function} getPlansCB
   */
  getPlans(data, getPlansCB) {
    async.waterfall([
      async.apply(PlanService.getPlanAndCompanies, data),
      (result, passDataCB) => (
        passDataCB(null, data, result.plan, result.companies)
      ),
      PlanService.calculatePlans
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getPlansCB(waterfallErr);
      }
      return getPlansCB(null, result);
    });
  }
  /**
   * Method to calculate plan for the selected quotation
   *
   * @param  {Object} quotation
   * @param  {Object} company
   * @param  {Function} loadPlanCB
   */
  loadCartPlan(quotation, company, loadPlanCB) {
    async.waterfall([
      async.apply(PlanService.getPlanByQuotation, quotation),
      (plan, passPlanCB) => (
        passPlanCB(null, quotation, plan, [company])
      ),
      PlanService.calculatePlans
    ], (waterfallErr, [result]) => {
      if (waterfallErr) {
        return loadPlanCB(waterfallErr);
      }
      return loadPlanCB(null, result);
    });
  }
}

module.exports = PlanService;
