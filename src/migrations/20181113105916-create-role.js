'use strict';

/**
 * Create Role Table
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Role', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        parentId: {
          type: Sequelize.UUID,
          allowNull: false,
          field: 'parent_id'
        },
        tenantId: {
          type: Sequelize.UUID,
          field: 'tenant_id',
          allowNull: false,
          references: {
            model: {
              tableName: 'Tenant'
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
      'Role'
    );
  }
};
