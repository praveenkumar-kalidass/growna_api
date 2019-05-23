'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Invoice', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        amount: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 'PENDING'
        },
        cartId: {
          type: Sequelize.UUID,
          field: 'cart_id',
          allowNull: false,
          unique: true,
          references: {
            model: {
              tableName: 'Cart'
            }
          }
        },
        userId: {
          type: Sequelize.UUID,
          field: 'user_id',
          allowNull: false,
          references: {
            model: {
              tableName: 'User'
            }
          }
        },
        tenantId: {
          type: Sequelize.UUID,
          field: 'tenant_id',
          allowNull: false,
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

  down: (queryInterface) => {
    return queryInterface.dropTable(
      'Invoice'
    );
  }
};
