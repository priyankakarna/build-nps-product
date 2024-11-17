module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      code: { type: DataTypes.STRING, unique: true, allowNull: false },
      name: { type: DataTypes.STRING },
      logo_url: { type: DataTypes.STRING },
      category: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      status: { type: DataTypes.STRING, defaultValue: 'active', index: true },
      concurrency_stamp: { type: DataTypes.UUID, unique: true, allowNull: false },
      created_by: DataTypes.UUID,
      updated_by: DataTypes.UUID,
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  return product;
};
