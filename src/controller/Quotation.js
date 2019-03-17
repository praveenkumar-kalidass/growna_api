/**
 * Controller to route all routes with index "/api/quotation"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const QuotationService = require('../service/Quotation');
const OAuth = require('./OAuth');
const quotationService = new QuotationService();
const oAuth = new OAuth();

/**
 * @swagger
 * /api/quotation/{id}:
 *  get:
 *    summary: Get Saved quotation and plans
 *    description: Get Quotation details with plans
 *    tags:
 *      - Quotation
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *    responses:
 *      200:
 *        description: Returns Quotation and Plans
 *      500:
 *        description: Server Error
 */
router.get('/:id', oAuth.authenticate, (request, response) => {
  quotationService.getPlansByQuotation(request.params.id, (getErr, result) => {
    if (getErr) {
      response.status(500).send(getErr);
    }
    response.send(result);
  });
});

/**
 * @swagger
 * /api/quotation:
 *  post:
 *    summary: Post plan search as quotation
 *    description: Save user plan search as quotation
 *    tags:
 *      - Quotation
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              brand:
 *                type: string
 *              model:
 *                type: string
 *              variant:
 *                type: string
 *              userId:
 *                type: string
 *                format: uuid
 *              tenantId:
 *                type: string
 *                format: uuid
 *              type:
 *                type: string
 *            required:
 *              - brand
 *              - model
 *              - variant
 *              - userId
 *              - tenantId
 *              - type
 *    responses:
 *      200:
 *        description: Returns quotation
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  quotationService.saveQuotation(request.body, (saveErr, quotation) => {
    if (saveErr) {
      response.status(500).send(saveErr);
    }
    response.send(quotation);
  });
});

module.exports = router;
