module.exports = (sequelize, DataTypes) => {
  const partner = sequelize.define(
    'partner',
    {
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      code: { type: DataTypes.STRING, unique: true, allowNull: false },
      name: { type: DataTypes.STRING },
      business_name: { type: DataTypes.STRING },
      logo_url: { type: DataTypes.STRING },
      tags: { type: DataTypes.STRING },
      rating: { type: DataTypes.INTEGER },
      about_us: { type: DataTypes.TEXT },
      description: { type: DataTypes.TEXT },
      terms_conditions: { type: DataTypes.STRING },
      privacy_policy: { type: DataTypes.STRING },
      website: { type: DataTypes.STRING },
      support_email: { type: DataTypes.STRING },
      support_mobile_number: { type: DataTypes.STRING },
      status: {
        type: DataTypes.STRING, index: true, defaultValue: 'active', enum: [ 'inactive', 'active' ],
      },
      created_by: { type: DataTypes.UUID },
      concurrency_stamp: { type: DataTypes.UUID, unique: true, allowNull: false },
      updated_by: { type: DataTypes.UUID },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  return partner;
};
