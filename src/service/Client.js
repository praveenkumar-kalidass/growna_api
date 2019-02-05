/**
 * Service to process functions with Client data
 *
 * @exports {Class} ClientService
 */
const ClientDao = require('../dao/Client');
const clientDao = new ClientDao();

/**
 * ClientService class
 *
 * @method {public} getClient
 */
class ClientService {
  /**
   * Method to get client by credentials
   *
   * @param  {UUID} clientId
   * @param  {String} clientSecret
   * @param  {Function} getClientCB
   */
  getClient(clientId, clientSecret, getClientCB) {
    clientDao.getClient(clientId, clientSecret, (clientErr, client) => {
      if (clientErr) {
        return getClientCB(clientErr);
      }
      return getClientCB(null, {
        id: client.id,
        grants: ['password', 'authorization_code', 'refresh_token'],
        redirectUris: [client.redirectUri]
      });
    });
  }
}

module.exports = ClientService;
