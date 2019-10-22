/**
 * Dao to fetch Company data
 *
 * @exports {Class} CompanyDao
 */
const models = require('../models');

/**
 * CompanyDao class
 *
 * @method {public} findAllCompanies
 * @method {public} findCompanyById
 * @method {public} upsertCompany
 * @method {public} findCompanyNames
 */
let CompanyDao = {};

/**
 * Dao to get companies list
 *
 * @param  {String} key
 * @param  {String} value
 * @param  {Function} findCB
 */
CompanyDao.findAllCompanies = (key, value, findCB) => {
  models.Company.findAll({
    where: {
      [key]: value
    }
  }).then((companies) => (
    findCB(null, companies)
  ), (findErr) => (
    findCB(findErr)
  ));
};

/**
 * Method to find company by ID
 *
 * @param  {UUID} id
 * @param  {Function} findCB
 */
CompanyDao.findCompanyById = (id, findCB) => {
  models.Company.findById(id).then((company) => (
    findCB(null, company)
  ), (findErr) => (
    findCB(findErr)
  ));
};

/**
 * Method to update or insert company
 *
 * @param  {Object} data
 * @param  {Function} createCB
 */
CompanyDao.upsertCompany = (data, createCB) => {
  models.Company.upsert(data, {
    returning: true
  }).then(([company]) => (
    createCB(null, company)
  ), (createErr) => (
    createCB(createErr)
  ));
};

/**
 * Method to find list of company names
 *
 * @param  {Function} findCB
 */
CompanyDao.findCompanyNames = (findCB) => {
  models.Company.findAll({
    attributes: ['name'],
    group: ['name']
  }).then((companies) => (
    findCB(null, companies)
  ), (findErr) => (
    findCB(findErr)
  ));
};

module.exports = CompanyDao;
