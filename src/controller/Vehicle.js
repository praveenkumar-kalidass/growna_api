/**
 * Controller to route all routes with index "/api/vehicle"
 *
 * @exports {express} router
 */
const express = require('express');
const router = express.Router();
const vehicleService = require('../service/Vehicle');
const oAuth = require('./OAuth');

/**
 * @swagger
 * /api/vehicle/brand/{type}:
 *  get:
 *    summary: Get Vehicle brand list
 *    description: Get list of brands for vehicle type
 *    tags:
 *      - Vehicle
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
 *        description: Returns Vehicle brand list
 *      500:
 *        description: Server Error
 */
router.get('/brand/:type', oAuth.authenticate, (request, response) => {
  vehicleService.getVehicleList('brand', {
    type: request.params.type
  }, (getErr, list) => {
    if (getErr) {
      response.status(500).send(getErr);
    }
    response.send(list);
  });
});

/**
 * @swagger
 * /api/vehicle/model/{brand}/{type}:
 *  get:
 *    summary: Get Vehicle model list
 *    description: Get list of models based on brand
 *    tags:
 *      - Vehicle
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: brand
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *      - name: type
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: Returns Vehicle model list
 *      500:
 *        description: Server Error
 */
router.get('/model/:brand/:type', oAuth.authenticate, (request, response) => {
  vehicleService.getVehicleList('model', {
    brand: request.params.brand,
    type: request.params.type
  }, (getErr, list) => {
    if (getErr) {
      response.status(500).send(getErr);
    }
    response.send(list);
  });
});

/**
 * @swagger
 * /api/vehicle/variant/{brand}/{model}/{type}:
 *  get:
 *    summary: Get Vehicle variant list
 *    description: Get list of variants based on brand and model
 *    tags:
 *      - Vehicle
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: brand
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *      - name: model
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *      - name: type
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: Returns Vehicle variant list
 *      500:
 *        description: Server Error
 */
router.get('/variant/:brand/:model/:type', oAuth.authenticate, (request, response) => {
  vehicleService.getVehicleList('variant', {
    brand: request.params.brand,
    model: request.params.model,
    type: request.params.type
  }, (getErr, list) => {
    if (getErr) {
      response.status(500).send(getErr);
    }
    response.send(list);
  });
});

module.exports = router;
