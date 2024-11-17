module.exports = (sequelize, DataTypes) => {
  const schemeData = sequelize.define(
    'scheme_data',
    {
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      scheme_id: {
        type: DataTypes.INTEGER, allowNull: false,
      },
      fund_code: { type: DataTypes.STRING },
      scheme_code: { type: DataTypes.STRING },
      scheme: { type: DataTypes.STRING },
      pfm: { type: DataTypes.STRING },
      asset_category: { type: DataTypes.STRING },
      ia_min_percentage: { type: DataTypes.INTEGER },
      ia_max_percentage: { type: DataTypes.INTEGER },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        index: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        index: true,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  return schemeData;
};
