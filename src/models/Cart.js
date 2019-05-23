const constant = require('../utils/constant');

/**
 * Cart Model
 */
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: constant.QUOTE
    },
    quotationId: {
      type: DataTypes.UUID,
      field: 'quotation_id',
      allowNull: false,
      unique: true
    },
    companyId: {
      type: DataTypes.UUID,
      field: 'company_id',
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      field: 'user_id',
      allowNull: false
    },
    tenantId: {
      type: DataTypes.UUID,
      field: 'tenant_id',
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
  Cart.associate = (models) => {
    Cart.belongsTo(models.Quotation, {
      as: 'cartQuotation',
      foreignKey: 'quotationId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    Cart.belongsTo(models.Company, {
      as: 'insurer',
      foreignKey: 'companyId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    Cart.belongsTo(models.User, {
      as: 'userCart',
      foreignKey: 'userId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    Cart.belongsTo(models.Tenant, {
      as: 'tenantCart',
      foreignKey: 'tenantId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    Cart.hasOne(models.VehicleOwner, {
      as: 'vehicleOwner',
      foreignKey: 'cartId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    Cart.hasOne(models.Address, {
      as: 'communicationAddress',
      foreignKey: 'cartId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    Cart.hasOne(models.VehicleDetail, {
      as: 'vehicle',
      foreignKey: 'cartId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    Cart.hasOne(models.PastPolicy, {
      as: 'pastPolicy',
      foreignKey: 'cartId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
    Cart.hasOne(models.Invoice, {
      as: 'invoiceCart',
      foreignKey: 'cartId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return Cart;
};
