const uuid = require('../utils/uuid');

/**
 * User Model
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'created_by'
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'parent_id'
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'role_id'
    },
    imageId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'image_id',
      defaultValue: uuid.DEFAULT_IMAGE
    },
    tenantId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'tenant_id'
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
  User.associate = (models) => {
    User.belongsTo(models.Role, {
      as: 'role',
      foreignKey: 'roleId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    User.belongsTo(models.Image, {
      as: 'userImage',
      foreignKey: 'imageId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    User.belongsTo(models.Tenant, {
      as: 'tenant',
      foreignKey: 'tenantId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    User.hasOne(models.OAuthToken, {
      as: 'user',
      foreignKey: 'userId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    User.hasOne(models.Quotation, {
      as: 'quotation',
      foreignKey: 'userId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    User.hasMany(models.Cart, {
      as: 'userCart',
      foreignKey: 'userId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return User;
};
