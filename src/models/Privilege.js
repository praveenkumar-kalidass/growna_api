/**
 * Privilege Model
 */
module.exports = (sequelize, DataTypes) => {
  const Privilege = sequelize.define('Privilege', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    type: {
      type: DataTypes.STRING,
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
  Privilege.associate = (models) => {
    Privilege.belongsToMany(models.Role, {
      as: 'privileges',
      through: models.Permission,
      foreignKey: 'privilegeId'
    });
  };
  return Privilege;
};
