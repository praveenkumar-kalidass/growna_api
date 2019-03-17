'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Plan', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        minEngineCc: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'min_engine_cc'
        },
        maxEngineCc: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'max_engine_cc'
        },
        minAge: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'min_age'
        },
        maxAge: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'max_age'
        },
        zoneType: {
          type: Sequelize.STRING(1),
          allowNull: false,
          field: 'zone_type'
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
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
        twoRate: {
          type: Sequelize.FLOAT,
          allowNull: false,
          field: 'two_rate'
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
      'Plan'
    );
  }
};
