'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'PastPolicy', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        expiryDate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          field: 'expiry_date'
        },
        policyNumber: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'policy_number'
        },
        claimed: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        noClaimBonus: {
          type: Sequelize.FLOAT,
          allowNull: false,
          field: 'no_claim_bonus'
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
        cartId: {
          type: Sequelize.UUID,
          field: 'cart_id',
          references: {
            model: {
              tableName: 'Cart'
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
      'PastPolicy'
    );
  }
};
