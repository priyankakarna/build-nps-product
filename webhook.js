module.exports = (sequelize, DataTypes) => {
  const webhook = sequelize.define(
    'webhook',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      data: { type: DataTypes.JSONB, allowNull: false },
      partner_code: { type: DataTypes.STRING },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  return webhook;
};
