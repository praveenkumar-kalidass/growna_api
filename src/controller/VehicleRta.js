const express = require('express');
const router = express.Router();
const VehicleRtaService = require('../service/VehicleRta');
const OAuth = require('./OAuth');
const oAuth = new OAuth();
const vehicleRtaService = new VehicleRtaService();

/**
 * @swagger
 * /api/vehicle-rta:
 *  get:
 *    summary: Get Vehicle RTA list
 *    description: Get list of all vehicle rta
 *    tags:
 *      - VehicleRta
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: List of Vehicle RTA
 *      500:
 *        description: Server Error
 */
router.get('/', oAuth.authenticate, (request, response) => {
  vehicleRtaService.getAllRta((getErr, result) => {
    if (getErr) {
      response.status(500).send(result);
    }
    response.send(result);
  });
});

module.exports = router;
