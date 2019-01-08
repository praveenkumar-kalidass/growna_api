'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Client', {
        id: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        redirectUri: {
          type: Sequelize.STRING,
          field: 'redirect_uri',
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          field: 'created_at',
          defaultValue: Sequelize.fn('NOW')
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          field: 'updated_at',
          defaultValue: Sequelize.fn('NOW')
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(
      'Client'
    );
  }
};
