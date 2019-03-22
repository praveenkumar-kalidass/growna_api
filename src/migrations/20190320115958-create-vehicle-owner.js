'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'VehicleOwner', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'first_name'
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'last_name'
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false
        },
        dateOfBirth: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          field: 'date_of_birth'
        },
        mobileNumber: {
          type: Sequelize.BIGINT,
          allowNull: false,
          field: 'mobile_number'
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'email'
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
      'VehicleOwner'
    );
  }
};
