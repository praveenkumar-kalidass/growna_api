const async = require('async');
const cartDao = require('../dao/Cart');
const quotationService = require('../service/Quotation');
const vehicleOwnerService = require('../service/VehicleOwner');
const addressService = require('../service/Address');
const vehicleDetailService = require('../service/VehicleDetail');
const pastPolicyService = require('../service/PastPolicy');
const companyService = require('../service/Company');
const planService = require('../service/Plan');

/**
 * CartService class
 *
 * @method {public} addCart
 * @method {private} loadCartDetails
 * @method {public} getCartDetails
 */
let CartService = {};

/**
 * Method to add new cart item
 *
 * @param  {Object} data
 * @param  {Function} addCB
 */
CartService.addCart = (data, addCB) => {
  cartDao.createCart(data, (addErr, cart) => {
    if (addErr) {
      return addCB(addErr);
    }
    return addCB(null, cart);
  });
};

/**
 * Method to load all cart details
 *
 * @param  {Object} cart
 * @param  {Function} loadDetailsCB
 */
const loadCartDetails = (cart, loadDetailsCB) => {
  async.parallel({
    cartQuotation: quotationService.getQuotation.bind(null, cart.quotationId),
    insurer: companyService.getCompanyById.bind(null, cart.companyId),
    vehicleOwner: vehicleOwnerService.getVehicleOwnerForCart.bind(null, cart.id),
    communicationAddress: addressService.getAddressForCart.bind(null, cart.id),
    vehicleDetail: vehicleDetailService.getVehicleForCart.bind(null, cart.id),
    pastPolicy: pastPolicyService.getPastPolicyForCart.bind(null, cart.id)
  }, (parallelErr, result) => {
    if (parallelErr) {
      return loadDetailsCB(parallelErr);
    }
    return loadDetailsCB(null, {...cart.dataValues, ...result});
  });
};

/**
 * Method to get cart and its quotation by cart id
 *
 * @param  {Object} id
 * @param  {Function} getDetailsCB
 */
CartService.getCartDetails = (id, getDetailsCB) => {
  let cart;
  async.waterfall([
    async.apply(cartDao.findCart, id),
    loadCartDetails,
    (result, passPlanCB) => {
      cart = result;
      return passPlanCB(null, result.cartQuotation, result.insurer);
    },
    planService.loadCartPlan,
    (plan, passPlanCB) => (
      passPlanCB(null, {...cart, plan})
    )
  ], (waterfallErr, result) => {
    if (waterfallErr) {
      return getDetailsCB(waterfallErr);
    }
    return getDetailsCB(null, result);
  });
};

module.exports = CartService;
