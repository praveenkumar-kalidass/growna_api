'use strict';
const uuid = require('../utils/uuid');

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
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          field: 'email'
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'password'
        },
        createdBy: {
          type: Sequelize.UUID,
          allowNull: false,
          field: 'created_by'
        },
        parentId: {
          type: Sequelize.UUID,
          allowNull: false,
          field: 'parent_id'
        },
        imageId: {
          type: Sequelize.UUID,
          field: 'image_id',
          defaultValue: uuid.DEFAULT_IMAGE,
          references: {
            model: {
              tableName: 'Image'
            }
          }
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
        tenantId: {
          type: Sequelize.UUID,
          field: 'tenant_id',
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
      'User'
    );
  }
};
