const async = require('async');
const CartDao = require('../dao/Cart');
const QuotationService = require('../service/Quotation');
const cartDao = new CartDao();
const quotationService = new QuotationService();

/**
 * CartService class
 *
 * @method {public} addCart
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
   * Method to get cart and its quotation by cart id
   *
   * @param  {Object} id
   * @param  {Function} getDetailsCB
   */
  getCartDetails(id, getDetailsCB) {
    let cart;
    async.waterfall([
      async.apply(cartDao.findCart, id),
      (result, passIdCB) => {
        cart = result;
        return passIdCB(null, result.quotationId);
      },
      quotationService.getQuotation
    ], (waterfallErr, result) => {
      if (waterfallErr) {
        return getDetailsCB(waterfallErr);
      }
      cart.dataValues.cartQuotation = result;
      return getDetailsCB(null, cart);
    });
  }
}

module.exports = CartService;
