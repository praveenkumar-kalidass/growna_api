'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'OAuthScope', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        method: {
          type: Sequelize.STRING,
          allowNull: false
        },
        path: {
          type: Sequelize.STRING,
          allowNull: false
        },
        acl: {
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
      'OAuthScope'
    );
  }
};
