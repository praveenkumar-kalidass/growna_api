/**
 * Image Model
 */
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
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
  Image.associate = (models) => {
    Image.hasOne(models.User, {
      as: 'userImage',
      foreignKey: 'imageId',
      sourceKey: 'id',
      onDelete: 'SET NULL'
    });
  };
  return Image;
};
