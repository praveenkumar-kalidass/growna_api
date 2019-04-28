const express = require('express');
const router = express.Router();
const CompanyService = require('../service/Company');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const companyService = new CompanyService();

/**
 * @swagger
 * /api/company/list:
 *  get:
 *    summary: Get company names list
 *    description: Get List of companies
 *    tags:
 *      - Company
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Returns Company names
 *      500:
 *        description: Server Error
 */
router.get('/list', oAuth.authenticate, (request, response) => {
  companyService.getCompanyList((getErr, result) => {
    if (getErr) {
      response.status(500).send(getErr);
    }
    response.send(result);
  });
});

/**
 * @swagger
 * /api/company/{key}/{value}:
 *  get:
 *    summary: Get company list
 *    description: Get List of companies by query
 *    tags:
 *      - Company
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: key
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *      - name: value
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: Returns Companies list
 *      500:
 *        description: Server Error
 */
router.get('/:key/:value', oAuth.authenticate, (request, response) => {
  companyService.getAllCompanies(request.params.key, request.params.value,
    (getErr, result) => {
      if (getErr) {
        response.status(500).send(getErr);
      }
      response.send(result);
    });
});

/**
 * @swagger
 * /api/company:
 *  post:
 *    summary: Create or Update company
 *    description: Save a company to the database
 *    tags:
 *      - Company
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                format: uuid
 *              name:
 *                type: string
 *              noClaimBonus:
 *                type: number
 *              thirdPartyPremium:
 *                type: number
 *              insuredDeclaredValue:
 *                type: number
 *              discount:
 *                type: number
 *              ownerDriver:
 *                type: number
 *              type:
 *                type: string
 *              imageId:
 *                type: string
 *                format: uuid
 *              image:
 *                type: string
 *                format: binary
 *            required:
 *              - name
 *              - noClaimBonus
 *              - thirdPartyPremium
 *              - insuredDeclaredValue
 *              - discount
 *              - ownerDriver
 *              - type
 *              - image
 *    responses:
 *      200:
 *        description: Returns the Saved Company
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  companyService.saveCompany(request.body, (request.files || {image: ""}).image,
    (saveErr, result) => {
    if (saveErr) {
      response.status(500).send(saveErr);
    }
    response.send(result);
  });
});

module.exports = router;
