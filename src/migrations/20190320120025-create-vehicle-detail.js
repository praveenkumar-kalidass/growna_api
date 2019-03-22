'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'VehicleDetail', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        vehicleNumber: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'vehicle_number'
        },
        onLoan: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          field: 'on_loan'
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

  down: (queryInterface) => {
    return queryInterface.dropTable(
      'VehicleDetail'
    );
  }
};
