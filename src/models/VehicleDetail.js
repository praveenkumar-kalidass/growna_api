/**
 * VehicleDetail Model
 */
module.exports = (sequelize, DataTypes) => {
  const VehicleDetail = sequelize.define('VehicleDetail', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vehicle_number'
    },
    onLoan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'on_loan'
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
  VehicleDetail.associate = (models) => {
    VehicleDetail.belongsTo(models.Cart, {
      as: 'vehicle',
      foreignKey: 'cartId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return VehicleDetail;
};
