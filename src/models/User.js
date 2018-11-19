/**
 * User Model
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    underscored: true
  });
  User.associate = (models) => {
    User.belongsTo(models.Role, {
      as: 'role',
      onDelete: 'SET NULL'
    });
  };
  return User;
};
