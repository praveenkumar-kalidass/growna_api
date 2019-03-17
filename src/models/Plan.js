/**
 * Plan Model
 */
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    minEngineCc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'min_engine_cc'
    },
    maxEngineCc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'max_engine_cc'
    },
    minAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'min_age'
    },
    maxAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'max_age'
    },
    zoneType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      field: 'zone_type'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thirdPartyPremium: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'third_party_premium'
    },
    insuredDeclaredValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'insured_declared_value'
    },
    twoRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'two_rate'
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
  return Plan;
};
