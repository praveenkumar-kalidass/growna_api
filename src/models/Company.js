const uuid = require('../utils/uuid');

/**
 * Company Model
 */
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    noClaimBonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'no_claim_bonus'
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
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ownerDriver: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'owner_driver'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'image_id',
      defaultValue: uuid.DEFAULT_IMAGE
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
  Company.associate = (models) => {
    Company.belongsTo(models.Image, {
      as: 'companyImage',
      foreignKey: 'imageId',
      targetKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return Company;
};
