/**
 * Dao to fetch Client data
 *
 * @exports {Class} ClientDao
 */
const models = require('../models');
const passwordHash = require('password-hash');
const ServerError = require('oauth2-server/lib/errors/server-error');

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
   * @param  {String} clientSecret
   * @param  {Function} getCB
   */
  getClient(clientId, clientSecret, getCB) {
    models.Client.find({
      where: {
        id: clientId
      }
    }).then((client) => {
      if (!client) {
        return getCB(new ServerError('No Client found'));
      }
      if (clientSecret) {
        if (passwordHash.verify(clientSecret, client.clientSecret)) {
          return getCB(null, client);
        }
        return getCB(new ServerError('Client Secret does not match'));
      }
      return getCB(null, client);
    }, (getError) => {
      return getCB(getError);
    });
  }
}

module.exports = ClientDao;
