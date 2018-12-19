'use strict';

/**
 * Create User Table
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'User', {
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
        roleId: {
          type: Sequelize.UUID,
          field: 'role_id',
          references: {
            model: {
              tableName: 'Role'
            }
          }
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
      'User'
    );
  }
};
