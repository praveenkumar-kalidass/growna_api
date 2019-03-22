'use strict';
const constant = require('../utils/constant');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Cart', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: constant.QUOTE
        },
        quotationId: {
          type: Sequelize.UUID,
          field: 'quotation_id',
          references: {
            model: {
              tableName: 'Quotation'
            }
          }
        },
        companyId: {
          type: Sequelize.UUID,
          field: 'company_id',
          references: {
            model: {
              tableName: 'Company'
            }
          }
        },
        userId: {
          type: Sequelize.UUID,
          field: 'user_id',
          references: {
            model: {
              tableName: 'User'
            }
          }
        },
        tenantId: {
          type: Sequelize.UUID,
          field: 'tenant_id',
          references: {
            model: {
              tableName: 'Tenant'
            }
          }
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'created_at',
          defaultValue: Sequelize.fn('NOW')
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated_at',
          defaultValue: Sequelize.fn('NOW')
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(
      'Cart'
    );
  }
};
