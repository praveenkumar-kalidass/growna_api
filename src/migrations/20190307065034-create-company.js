'use strict';
const uuid = require('../utils/uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Company', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        noClaimBonus: {
          type: Sequelize.FLOAT,
          allowNull: false,
          field: 'no_claim_bonus'
        },
        thirdPartyPremium: {
          type: Sequelize.FLOAT,
          allowNull: false,
          field: 'third_party_premium'
        },
        insuredDeclaredValue: {
          type: Sequelize.FLOAT,
          allowNull: false,
          field: 'insured_declared_value'
        },
        discount: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        ownerDriver: {
          type: Sequelize.FLOAT,
          allowNull: false,
          field: 'owner_driver'
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        imageId: {
          type: Sequelize.UUID,
          field: 'image_id',
          defaultValue: uuid.DEFAULT_IMAGE,
          allowNull: false,
          references: {
            model: {
              tableName: 'Image'
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
      'Company'
    );
  }
};
