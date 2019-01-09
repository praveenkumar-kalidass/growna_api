/**
 * Dao to fetch Client data
 *
 * @exports {Class} ClientDao
 */
const models = require('../models');

/**
 * ClientDao class
 *
 * @method {public} getClient
 */
class ClientDao {
  /**
   * Method to get client by id
   *
   * @param  {UUID} clientId
   * @param  {Function} getCB
   */
  getClient(clientId, getCB) {
    models.Client.find({
      where: {
        id: clientId
      }
    }).then((client) => {
      return getCB(null, client);
    }, (getError) => {
      return getCB(getError);
    })
  }
}

module.exports = ClientDao;
