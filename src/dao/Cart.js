/**
 * Dao to fetch Cart data
 *
 * @exports {Class} CartDao
 */
const models = require('../models');

/**
 * CartDao class
 *
 * @method {public} createCart
 * @method {public} findCart
 */
class CartDao {
  /**
   * Method to create new cart
   *
   * @param  {Object} data
   * @param  {Function} createCB
   */
  createCart(data, createCB) {
    models.Cart.create(data).then((cart) => (
      createCB(null, cart)
    ), (createErr) => (
      createCB(createErr)
    ));
  }
  /**
   * Method to find cart by ID
   *
   * @param  {UUID} id
   * @param  {Function} findCB
   */
  findCart(id, findCB) {
    models.Cart.findById(id).then((cart) => (
      findCB(null, cart)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = CartDao;
