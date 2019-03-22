const express = require('express');
const router = express.Router();
const VehicleDetailService = require('../service/VehicleDetail');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const vehicleDetailService = new VehicleDetailService();

/**
 * @swagger
 * /api/vehicle-detail:
 *  post:
 *    summary: Save vehicle detail for the cart
 *    description: Create or update vehicle detail
 *    tags:
 *      - VehicleDetail
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              vehicleNumber:
 *                type: string
 *              onLoan:
 *                type: boolean
 *              cartId:
 *                type: string
 *                format: uuid
 *            required:
 *              - vehicleNumber
 *              - onLoan
 *              - cartId
 *    responses:
 *      200:
 *        description: Returns the saved vehicle detail
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  vehicleDetailService.saveVehicleDetail(request.body, (saveErr, detail) => {
    if (saveErr) {
      response.status(500).send(saveErr);
    }
    response.send(detail);
  });
});

module.exports = router;
