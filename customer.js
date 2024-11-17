module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define(
    'customer',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      user_id: { type: DataTypes.UUID, allowNull: false, unique: true },
      pan: { type: DataTypes.STRING, allowNull: false, unique: true },
      partner: { type: DataTypes.JSONB },
      product: { type: DataTypes.JSONB },
      basic_info: { type: DataTypes.JSONB },
      documents: { type: DataTypes.ARRAY(DataTypes.JSONB) },
      bank_account: { type: DataTypes.JSONB },
      nominees: { type: DataTypes.ARRAY(DataTypes.JSONB) },
      pran: { type: DataTypes.STRING, unique: true },
      scheme_preference_details: { type: DataTypes.JSON },
      is_kyc: { type: DataTypes.BOOLEAN, defaultValue: false },
      other_details: { type: DataTypes.JSON },
      kyc_details: { type: DataTypes.JSONB },
      investment_details: { type: DataTypes.JSON },
      account_status: { type: DataTypes.JSON },
      portfolio: { type: DataTypes.JSON },
      created_by: { type: DataTypes.UUID },
      updated_by: { type: DataTypes.UUID },
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

  return customer;
};
