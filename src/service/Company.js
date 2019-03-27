/**
 * Service to process functions with Company data
 *
 * @exports {Class} CompanyService
 */
const async = require('async');
const ImageService = require('../service/Image');
const CompanyDao = require('../dao/Company');
const companyDao = new CompanyDao();
const imageService = new ImageService();

/**
 * CompanyService class
 *
 * @method {private} loadCompanies
 * @method {public} getAllCompanies
 * @method {public} getCompanyById
 */
class CompanyService {
  /**
   * Method to load image for companies
   *
   * @param  {Array} companies
   * @param  {Function} loadCB
   */
  static loadCompanies(companies, loadCB) {
    async.map(companies, (company, asyncCB) => {
      imageService.getImageById(company.imageId, (imageErr, image) => {
        if (imageErr) {
          return asyncCB(imageErr);
        }
        company.dataValues.companyImage = image;
        return asyncCB(null, company);
      });
    }, (mapErr, result) => {
      if (mapErr) {
        return loadCB(mapErr);
      }
      return loadCB(null, result);
    });
  }
  /**
   * Method to get all companies
   *
   * @param  {String} type
   * @param  {Array} attributes
   * @param  {Function} getCB
   */
  getAllCompanies(type, attributes, getCB) {
    async.waterfall([
      async.apply(companyDao.findAllCompanies, type, attributes),
      CompanyService.loadCompanies
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getCB(waterfallErr);
      }
      return getCB(null, result);
    });
  }
  /**
   * Method to get company by ID
   *
   * @param  {UUID} id
   * @param  {Function} getCompanyCB
   */
  getCompanyById(id, getCompanyCB) {
    let company;
    async.waterfall([
      async.apply(companyDao.findCompanyById, id),
      (result, passIdCB) => {
        company = result;
        return passIdCB(null, result.imageId);
      },
      imageService.getImageById
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getCompanyCB(waterfallErr);
      }
      company.dataValues.companyImage = result;
      return getCompanyCB(null, company);
    });
  }
}

module.exports = CompanyService;
