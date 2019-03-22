'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Address', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        houseNumber: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'house_number'
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false
        },
        pincode: {
          type: Sequelize.INTEGER,
          allowNull: false
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
      'Address'
    );
  }
};
