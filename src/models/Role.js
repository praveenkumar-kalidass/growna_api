/**
 * Role Model
 */
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['WEB', 'AGENCY']]
      },
      allowNull: false
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'parent_id'
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
  Role.associate = (models) => {
    Role.hasOne(models.User, {
      as: 'role',
      foreignKey: 'roleId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    Role.belongsToMany(models.Privilege, {
      as: 'privileges',
      through: models.Permission,
      foreignKey: 'roleId'
    });
    Role.belongsTo(models.Tenant, {
      as: 'roleTenant',
      foreignKey: 'tenantId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return Role;
};
