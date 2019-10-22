const express = require('express');
const router = express.Router();
const cartService = require('../service/Cart');
const oAuth = require('./OAuth');

/**
 * @swagger
 * /api/cart/{id}:
 *  get:
 *    summary: Get cart and quotation details
 *    description: Get Cart details with its quotation by Cart ID
 *    tags:
 *      - Cart
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
 *        description: Returns Cart and Quotation details
 *      500:
 *        description: Server Error
 */
router.get('/:id', oAuth.authenticate, (request, response) => {
  cartService.getCartDetails(request.params.id, (getErr, cart) => {
    if (getErr) {
      response.status(500).send(getErr);
    }
    response.send(cart);
  });
});

/**
 * @swagger
 * /api/cart:
 *  post:
 *    summary: Create a new cart
 *    description: Add a new empty cart
 *    tags:
 *      - Cart
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              type:
 *                type: string
 *              status:
 *                type: string
 *              userId:
 *                type: string
 *                format: uuid
 *              tenantId:
 *                type: string
 *                format: uuid
 *              quotationId:
 *                type: string
 *                format: uuid
 *              companyId:
 *                type: string
 *                format: uuid
 *            required:
 *              - type
 *              - userId
 *              - tenantId
 *              - quotationId
 *              - companyId
 *    responses:
 *      200:
 *        description: Returns the created Cart details
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  cartService.addCart(request.body, (addErr, cart) => {
    if (addErr) {
      response.status(500).send(addErr);
    }
    response.send(cart);
  });
});

module.exports = router;
