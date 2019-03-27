const express = require('express');
const router = express.Router();
const CompanyService = require('../service/Company');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const companyService = new CompanyService();

/**
 * @swagger
 * /api/company/{type}:
 *  get:
 *    summary: Get company list
 *    description: Get List of companies by vehicle type
 *    tags:
 *      - Company
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: type
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
router.get('/:type', oAuth.authenticate, (request, response) => {
  companyService.getAllCompanies(request.params.type,
    ['id', 'name', 'imageId'],
    (getErr, result) => {
      if (getErr) {
        response.status(500).send(getErr);
      }
      response.send(result);
    });
});

module.exports = router;
