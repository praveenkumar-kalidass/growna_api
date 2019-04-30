/**
 * VehicleRta Model
 */
module.exports = (sequelize, DataTypes) => {
  const VehicleRta = sequelize.define('VehicleRta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    registrationCode: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'registration_code'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'display_name'
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zoneType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      field: 'zone_type'
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
  return VehicleRta;
};
