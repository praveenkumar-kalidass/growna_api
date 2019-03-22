/**
 * VehicleOwner Model
 */
module.exports = (sequelize, DataTypes) => {
  const VehicleOwner = sequelize.define('VehicleOwner', {
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
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_of_birth'
    },
    mobileNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'mobile_number'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'
    },
    cartId: {
      type: DataTypes.UUID,
      field: 'cart_id',
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
  VehicleOwner.associate = (models) => {
    VehicleOwner.belongsTo(models.Cart, {
      as: 'vehicleOwner',
      foreignKey: 'cartId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return VehicleOwner;
};
