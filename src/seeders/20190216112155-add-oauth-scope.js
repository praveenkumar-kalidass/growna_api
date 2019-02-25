'use strict';
const uuidv4 = require('uuid/v4');
const constant = require('../utils/constant');

/**
 * Add OAuth Scopes
 */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('OAuthScope', [{
      id: uuidv4(),
      method: 'GET',
      path: '/api/role/privileges',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/role/validate',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/role/tenant',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/role/detail',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/tenant/register',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/user/add',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/user',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/user/role',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/user/tenant',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/role/add',
      acl: constant.ADMIN
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('OAuthScope', null, {});
  }
};
