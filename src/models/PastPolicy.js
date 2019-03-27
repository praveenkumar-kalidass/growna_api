/**
 * PastPolicy Model
 */
module.exports = (sequelize, DataTypes) => {
  const PastPolicy = sequelize.define('PastPolicy', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    expiryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'expiry_date'
    },
    policyNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'policy_number'
    },
    claimed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    noClaimBonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'no_claim_bonus'
    },
    companyId: {
      type: DataTypes.UUID,
      field: 'company_id',
      allowNull: false
    },
    cartId: {
      type: DataTypes.UUID,
      field: 'cart_id',
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
  PastPolicy.associate = (models) => {
    PastPolicy.belongsTo(models.Company, {
      as: 'pastInsurer',
      foreignKey: 'companyId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
    PastPolicy.belongsTo(models.Cart, {
      as: 'pastPolicy',
      foreignKey: 'cartId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return PastPolicy;
};
