'use strict';

/**
 * Create Permission Table
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Permission', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
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
        privilegeId: {
          type: Sequelize.UUID,
          field: 'privilege_id',
          references: {
            model: {
              tableName: 'Privilege'
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
      'Permission'
    );
  }
};
