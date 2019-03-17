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
   * @param  {Function} getCB
   */
  getAllCompanies(type, getCB) {
    async.waterfall([
      async.apply(companyDao.findAllCompanies, type),
      CompanyService.loadCompanies
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getCB(waterfallErr);
      }
      return getCB(null, result);
    });
  }
}

module.exports = CompanyService;
