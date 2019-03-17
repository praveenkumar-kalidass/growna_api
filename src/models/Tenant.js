/**
 * Tenant Model
 */
module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define('Tenant', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
  Tenant.associate = (models) => {
    Tenant.hasOne(models.Role, {
      as: 'roleTenant',
      foreignKey: 'tenantId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    Tenant.hasOne(models.User, {
      as: 'tenant',
      foreignKey: 'tenantId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    Tenant.hasOne(models.Quotation, {
      as: 'tenantQuotation',
      foreignKey: 'tenantId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return Tenant;
};
