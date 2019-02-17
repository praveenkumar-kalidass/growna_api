/**
 * Service to process functions with OAuthToken scope
 *
 * @exports {Class} OAuthScopeService
 */
const OAuthScopeDao = require('../dao/OAuthScope');
const oAuthScopeDao = new OAuthScopeDao();
const constant = require('../utils/constant');

/**
 * OAuthToken Service class
 *
 * @method {public} verifyScope
 */
class OAuthScopeService {
  /**
   * Service to verify scope is valid or not for the particular accesstoken
   *
   * @param  {String} accessToken
   * @param  {Object} scope
   * @param  {Function} verifyCB
   */
  verifyScope(accessToken, scope, verifyCB) {
    oAuthScopeDao.findScope(scope.method, scope.path, (scopeErr, authScope) => {
      if (scopeErr) {
        return verifyCB(scopeErr);
      }
      if (authScope.acl === constant.EVERYONE) {
        return verifyCB(null, true);
      }
      return verifyCB(null, authScope.acl === accessToken.scope);
    });
  }
}

module.exports = OAuthScopeService;
