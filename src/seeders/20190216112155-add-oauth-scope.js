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
      method: 'POST',
      path: '/api/address',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/cart',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/cart',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/company',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/past-policy',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/permission',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/permission/validate',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/privilege/scope',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/quotation',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/quotation',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/role',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/role/detail',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/role/tenant',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/role',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/tenant/register',
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
      path: '/api/user',
      acl: constant.ADMIN
    }, {
      id: uuidv4(),
      method: 'PUT',
      path: '/api/user',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/vehicle/brand',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/vehicle/model',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'GET',
      path: '/api/vehicle/variant',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/vehicle-detail',
      acl: constant.EVERYONE
    }, {
      id: uuidv4(),
      method: 'POST',
      path: '/api/vehicle-owner',
      acl: constant.EVERYONE
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('OAuthScope', null, {});
  }
};
