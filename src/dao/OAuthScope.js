/**
 * Dao to fetch OAuth Scopes
 *
 * @exports {Class} OAuthScopeDao
 */
const models = require('../models');

/**
 * OAuthScopeDao class
 *
 * @method {public} findScope
 */
class OAuthScopeDao {
  /**
   * Method to get Scope for rest API
   *
   * @param  {String} method
   * @param  {String} path
   * @param  {Function} findCB
   */
  findScope(method, path, findCB) {
    models.OAuthScope.find({
      where: { method, path }
    }).then((scope) => {
      return findCB(null, scope);
    }, (findErr) => {
      return findCB(findErr);
    });
  }
}

module.exports = OAuthScopeDao;
