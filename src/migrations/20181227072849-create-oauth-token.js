'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'OAuthToken', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        accessToken: {
          type: Sequelize.STRING,
          field: 'access_token',
          allowNull: false
        },
        accessTokenExpiresOn: {
          type: Sequelize.DATE,
          field: 'access_token_expires_on',
          allowNull: false
        },
        clientId: {
          type: Sequelize.STRING,
          field: 'client_id',
          references: {
            model: {
              tableName: 'Client'
            }
          }
        },
        refreshToken: {
          type: Sequelize.STRING,
          field: 'refresh_token',
          allowNull: false
        },
        refreshTokenExpiresOn: {
          type: Sequelize.DATE,
          field: 'refresh_token_expires_on',
          allowNull: false
        },
        userId: {
          type: Sequelize.UUID,
          field: 'user_id',
          references: {
            model: {
              tableName: 'User'
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
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(
      'OAuthToken'
    );
  }
};
