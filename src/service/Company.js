/**
 * Service to process functions with Company data
 *
 * @exports {Class} CompanyService
 */
const async = require('async');
const fs = require('fs');
const imageService = require('../service/Image');
const companyDao = require('../dao/Company');
const constant = require('../utils/constant');

/**
 * CompanyService class
 *
 * @method {private} loadCompanies
 * @method {public} getAllCompanies
 * @method {public} getCompanyById
 * @method {public} createImageForCompany
 * @method {public} updateCompanyImage
 * @method {public} saveCompany
 * @method {public} getCompanyList
 */
let CompanyService = {};

/**
 * Method to load image for companies
 *
 * @param  {Array} companies
 * @param  {Function} loadCB
 */
const loadCompanies = (companies, loadCB) => {
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
};

/**
 * Method to get all companies
 *
 * @param  {String} key
 * @param  {String} value
 * @param  {Function} getCB
 */
CompanyService.getAllCompanies = (key, value, getCB) => {
  async.waterfall([
    async.apply(companyDao.findAllCompanies, key, value),
    loadCompanies
  ], (waterfallErr, result) => {
    if (waterfallErr) {
      return getCB(waterfallErr);
    }
    return getCB(null, result);
  });
};

/**
 * Method to get company by ID
 *
 * @param  {UUID} id
 * @param  {Function} getCompanyCB
 */
CompanyService.getCompanyById = (id, getCompanyCB) => {
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
};

/**
 * Method to create default image for company
 *
 * @param  {UUID} imageId
 * @param  {Function} createImageCB
 */
const createImageForCompany = (imageId, createImageCB) => {
  if (imageId) {
    return createImageCB(null, imageId);
  }
  imageService.createDefaultImage(constant.COMPANY, (createErr, image) => {
    if (createErr) {
      return createImageCB(createErr);
    }
    return createImageCB(null, image.id);
  });
};

/**
 * Method to update company detail with new image
 *
 * @param  {Object} company
 * @param  {File} image
 * @param  {Function} updateImageCB
 */
const updateCompanyImage = (company, image, updateImageCB) => {
  if (!image) {
    return updateImageCB(null);
  }
  const dir = `public/images/company/${company.id}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  async.waterfall([
    async.apply(image.mv, `${dir}/${company.imageId}.${image.mimetype.replace('image/', '')}`),
    (passPathCB) => (
      passPathCB(null, company.imageId, `/images/company/${company.id}/${company.imageId}.${image.mimetype.replace('image/', '')}`)
    ),
    imageService.updateImagePath
  ], (waterfallErr, result) => {
    if (waterfallErr) {
      return updateImageCB(waterfallErr);
    }
    return updateImageCB(null, result);
  });
};

/**
 * Method to create company and image
 *
 * @param  {Object} data
 * @param  {File} image
 * @param  {Function} saveCB
 */
CompanyService.saveCompany = (data, image, saveCB) => {
  let company;
  async.waterfall([
    async.apply(createImageForCompany, data.imageId),
    (imageId, passIdCB) => (
      passIdCB(null, {...data, imageId})
    ),
    companyDao.upsertCompany,
    (result, passCB) => {
      company = result;
      return passCB(null, company, image);
    },
    updateCompanyImage
  ], (waterfallErr) => {
    if (waterfallErr) {
      return saveCB(waterfallErr);
    }
    return saveCB(null, company);
  });
};

/**
 * Method to get company name list
 *
 * @param  {Function} getListCB
 */
CompanyService.getCompanyList = (getListCB) => {
  companyDao.findCompanyNames((findErr, result) => {
    if (findErr) {
      return getListCB(findErr);
    }
    return getListCB(null, result);
  });
};

module.exports = CompanyService;
