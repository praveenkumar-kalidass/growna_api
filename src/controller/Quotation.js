/**
 * Controller to route all routes with index "/api/quotation"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const quotationService = require('../service/Quotation');
const oAuth = require('./OAuth');

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
 *              engineCc:
 *                type: number
 *              vehicleYear:
 *                type: number
 *              type:
 *                type: string
 *              registrationCode:
 *                type: string
 *              zoneType:
 *                type: string
 *              userId:
 *                type: string
 *                format: uuid
 *              tenantId:
 *                type: string
 *                format: uuid
 *            required:
 *              - brand
 *              - model
 *              - variant
 *              - engineCc
 *              - vehicleYear
 *              - type
 *              - registrationCode
 *              - zoneType
 *              - userId
 *              - tenantId
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

/**
 * @swagger
 * /api/quotation:
 *  put:
 *    summary: Put updated quotation details
 *    description: Save edited quotation details
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
 *              engineCc:
 *                type: number
 *              vehicleYear:
 *                type: number
 *              type:
 *                type: string
 *              insuredDeclaredValue:
 *                type: number
 *              registrationCode:
 *                type: string
 *              zoneType:
 *                type: string
 *              userId:
 *                type: string
 *                format: uuid
 *              tenantId:
 *                type: string
 *                format: uuid
 *            required:
 *              - insuredDeclaredValue
 *    responses:
 *      200:
 *        description: Returns updated quotation
 *      500:
 *        description: Server Error
 */
router.put('/', oAuth.authenticate, (request, response) => {
  quotationService.editQuotation(request.body, (editErr, quotation) => {
    if (editErr) {
      response.status(500).send(editErr);
    }
    response.send(quotation);
  });
});

module.exports = router;
