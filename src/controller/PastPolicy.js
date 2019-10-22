const express = require('express');
const router = express.Router();
const pastPolicyService = require('../service/PastPolicy');
const oAuth = require('./OAuth');

/**
 * @swagger
 * /api/past-policy:
 *  post:
 *    summary: Save past policy details
 *    description: Create or update past policy detail
 *    tags:
 *      - PastPolicy
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              expiryDate:
 *                type: string
 *                format: date
 *              policyNumber:
 *                type: string
 *              claimed:
 *                type: boolean
 *              noClaimBonus:
 *                type: number
 *              companyId:
 *                type: string
 *                format: uuid
 *              cartId:
 *                type: string
 *                format: uuid
 *            required:
 *              - expiryDate
 *              - policyNumber
 *              - claimed
 *              - noClaimBonus
 *              - companyId
 *              - cartId
 *    responses:
 *      200:
 *        description: Returns the saved past policy detail
 *      500:
 *        description: Server Error
 */
router.post('/', oAuth.authenticate, (request, response) => {
  pastPolicyService.savePolicy(request.body, (saveErr, policy) => {
    if (saveErr) {
      response.status(500).send(saveErr);
    }
    response.send(policy);
  });
});

module.exports = router;
