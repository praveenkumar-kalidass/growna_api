const models = require('../models');

class ClientDao {
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
