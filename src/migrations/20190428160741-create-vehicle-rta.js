'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'VehicleRta', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        registrationCode: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'registration_code'
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false
        },
        displayName: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'display_name'
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false
        },
        zoneType: {
          type: Sequelize.STRING(1),
          allowNull: false,
          field: 'zone_type'
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
      'VehicleRta'
    );
  }
};
