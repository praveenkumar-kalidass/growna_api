const express = require('express');
const router = express.Router();
const vehicleOwnerService = require('../service/VehicleOwner');
const oAuth = require('./OAuth');

/**
 * @swagger
 * /api/vehicle-owner:
 *  post:
 *    summary: Save vehicle owner details for the cart
 *    description: Create or update vehicle owner details
 *    tags:
 *      - VehicleOwner
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              gender:
 *                type: string
 *              dateOfBirth:
 *                type: string
 *                format: date
 *              mobileNumber:
 *                type: number
 *              email:
 *                type: string
 *              cartId:
 *                type: string
 *                format: uuid
 *            required:
 *              - firstName
 *              - lastName
 *              - gender
 *              - dateOfBirth
 *              - mobileNumber
 *              - email
 *              - cartId
 *    responses:
 *      200:
 *        description: Returns the saved vehicle owner details
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  vehicleOwnerService.saveOwnerDetail(request.body, (saveErr, detail) => {
    if (saveErr) {
      response.status(500).send(saveErr);
    }
    response.send(detail);
  });
});

module.exports = router;
