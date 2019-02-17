/**
 * OAuthScope Model
 */
module.exports = (sequelize, DataTypes) => {
  const OAuthScope = sequelize.define('OAuthScope', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    acl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    freezeTableName: true,
    timestamps: true
  });
  return OAuthScope;
};
