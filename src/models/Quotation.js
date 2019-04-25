/**
 * Quotation Model
 */
module.exports = (sequelize, DataTypes) => {
  const Quotation = sequelize.define('Quotation', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    variant: {
      type: DataTypes.STRING,
      allowNull: false
    },
    engineCc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'engine_cc'
    },
    vehicleYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'vehicle_year'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    insuredDeclaredValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'insured_declared_value',
      defaultValue: 0
    },
    standardIdv: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'standard_idv'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
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
  Quotation.associate = (models) => {
    Quotation.belongsTo(models.User, {
      as: 'quotation',
      foreignKey: 'userId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    Quotation.belongsTo(models.Tenant, {
      as: 'tenantQuotation',
      foreignKey: 'tenantId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    Quotation.hasOne(models.Cart, {
      as: 'cartQuotation',
      foreignKey: 'quotationId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return Quotation;
};
