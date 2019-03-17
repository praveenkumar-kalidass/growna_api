/**
 * Service to process functions with Plan data
 *
 * @exports {Class} PlanService
 */
const async = require('async');
const _ = require('lodash');
const mixin = require('../utils/mixin');
const VehicleService = require('../service/Vehicle');
const CompanyService = require('../service/Company');
const PlanDao = require('../dao/Plan');
const vehicleService = new VehicleService();
const companyService = new CompanyService();
const planDao = new PlanDao();

/**
 * PlanService class
 *
 * @method {private} getPlanByData
 * @method {private} getCompanies
 * @method {private} getPlanAndCompanies
 * @method {private} calculatePlans
 * @method {public} getPlans
 */
class PlanService {
  /**
   * Method to get plan based on specifications
   *
   * @param  {Object} data
   * @param  {Function} getPlanCB
   */
  static getPlanByData(data, getPlanCB) {
    async.waterfall([
      async.apply(vehicleService.getVehicle, data),
      (vehicle, passDataCB) => (
        passDataCB(null, vehicle.engineCc, data.type)
      ),
      planDao.findPlan
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getPlanCB(waterfallErr);
      }
      return getPlanCB(null, result);
    });
  }
  /**
   * Method to get all companies for vehicle type
   *
   * @param  {String} type
   * @param  {Function} getCB
   */
  static getCompanies(type, getCB) {
    companyService.getAllCompanies(type, (getErr, companies) => {
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
      plan: PlanService.getPlanByData.bind(null, data),
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
   * @param  {Object} plan
   * @param  {Array} companies
   * @param  {Function} calculateCB
   */
  static calculatePlans(plan, companies, calculateCB) {
    async.map(companies, (company, asyncCB) => {
      company.dataValues = {
        ...company.dataValues,
        thirdPartyPremium: plan.thirdPartyPremium * company.thirdPartyPremium,
        insuredDeclaredValue: plan.insuredDeclaredValue * company.insuredDeclaredValue
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
        passDataCB(null, result.plan, result.companies)
      ),
      PlanService.calculatePlans
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getPlansCB(waterfallErr);
      }
      return getPlansCB(null, result);
    });
  }
}

module.exports = PlanService;
