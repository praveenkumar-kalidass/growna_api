const async = require('async');
const CartDao = require('../dao/Cart');
const QuotationService = require('../service/Quotation');
const VehicleOwnerService = require('../service/VehicleOwner');
const AddressService = require('../service/Address');
const VehicleDetailService = require('../service/VehicleDetail');
const PastPolicyService = require('../service/PastPolicy');
const CompanyService = require('../service/Company');
const PlanService = require('../service/Plan');
const cartDao = new CartDao();
const quotationService = new QuotationService();
const vehicleOwnerService = new VehicleOwnerService();
const addressService = new AddressService();
const vehicleDetailService = new VehicleDetailService();
const pastPolicyService = new PastPolicyService();
const companyService = new CompanyService();
const planService = new PlanService();

/**
 * CartService class
 *
 * @method {public} addCart
 * @method {private} loadCartDetails
 * @method {public} getCartDetails
 */
class CartService {
  /**
   * Method to add new cart item
   *
   * @param {Object} data
   * @param {Function} addCB
   */
  addCart(data, addCB) {
    cartDao.createCart(data, (addErr, cart) => {
      if (addErr) {
        return addCB(addErr);
      }
      return addCB(null, cart);
    });
  }
  /**
   * Method to load all cart details
   *
   * @param  {Object} cart
   * @param  {Function} loadDetailsCB
   */
  static loadCartDetails(cart, loadDetailsCB) {
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
  }
  /**
   * Method to get cart and its quotation by cart id
   *
   * @param  {Object} id
   * @param  {Function} getDetailsCB
   */
  getCartDetails(id, getDetailsCB) {
    let cart;
    async.waterfall([
      async.apply(cartDao.findCart, id),
      CartService.loadCartDetails,
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
  }
}

module.exports = CartService;
