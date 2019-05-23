const express = require('express');
const router = express.Router();
const InvoiceService = require('../service/Invoice');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const invoiceService = new InvoiceService();

/**
 * @swagger
 * /api/invoice:
 *  post:
 *    summary: Save invoice details
 *    description: Create or insert invoice
 *    tags:
 *      - Invoice
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              amount:
 *                type: number
 *              status:
 *                type: string
 *              cartId:
 *                type: string
 *                format: uuid
 *              userId:
 *                type: string
 *                format: uuid
 *              tenantId:
 *                type: string
 *                format: uuid
 *            required:
 *              - amount
 *              - cartId
 *              - userId
 *              - tenantId
 *    responses:
 *      200:
 *        description: Returns the saved Invoice details
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  invoiceService.saveInvoice(request.body, (invoiceErr, invoice) => {
    if (invoiceErr) {
      response.status(500).send(invoiceErr);
    }
    response.send(invoice);
  });
});

module.exports = router;
