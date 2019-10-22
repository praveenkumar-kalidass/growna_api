const express = require('express');
const router = express.Router();
const addressService = require('../service/Address');
const oAuth = require('./OAuth');

/**
 * @swagger
 * /api/address:
 *  post:
 *    summary: Save communication address for the cart
 *    description: Create or update address
 *    tags:
 *      - Address
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              houseNumber:
 *                type: string
 *              address:
 *                type: string
 *              pincode:
 *                type: number
 *              cartId:
 *                type: string
 *                format: uuid
 *            required:
 *              - houseNumber
 *              - address
 *              - pincode
 *              - cartId
 *    responses:
 *      200:
 *        description: Returns the saved address
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  addressService.saveAddress(request.body, (saveErr, address) => {
    if (saveErr) {
      response.status(500).send(saveErr);
    }
    response.send(address);
  });
});

module.exports = router;
