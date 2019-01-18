'use strict';

/**
 * Create Privilege Table
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Privilege', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
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
      'Privilege'
    );
  }
};
