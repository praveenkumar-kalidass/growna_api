/**
 * Invoice Model
 */
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'PENDING'
    },
    cartId: {
      type: DataTypes.UUID,
      field: 'cart_id',
      allowNull: false,
      unique: true
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
  Invoice.associate = (models) => {
    Invoice.belongsTo(models.Cart, {
      as: 'invoiceCart',
      foreignKey: 'cartId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    Invoice.belongsTo(models.User, {
      as: 'userInvoice',
      foreignKey: 'userId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    Invoice.belongsTo(models.Tenant, {
      as: 'tenantInvoice',
      foreignKey: 'tenantId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return Invoice;
};
