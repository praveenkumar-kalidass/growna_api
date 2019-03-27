'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Quotation', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false
        },
        variant: {
          type: Sequelize.STRING,
          allowNull: false
        },
        engineCc: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'engine_cc'
        },
        vehicleYear: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'vehicle_year'
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        userId: {
          type: Sequelize.UUID,
          field: 'user_id',
          allowNull: false,
          references: {
            model: {
              tableName: 'User'
            }
          }
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
      'Quotation'
    );
  }
};
