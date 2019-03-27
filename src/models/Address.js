/**
 * Address Model
 */
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    houseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'house_number'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pincode: {
      type: DataTypes.INTEGER,
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
  Address.associate = (models) => {
    Address.belongsTo(models.Cart, {
      as: 'communicationAddress',
      foreignKey: 'cartId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return Address;
};
