module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    'order',
    {
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      user_id: { type: DataTypes.UUID, index: true, allowNull: false },
      partner_id: { type: DataTypes.UUID, allowNull: false },
      product_id: { type: DataTypes.UUID, allowNull: false },
      response: { type: DataTypes.JSON },
      reg_receipt_sequence_number: { type: DataTypes.STRING, allowNull: false },
      partner: { type: DataTypes.JSONB, allowNull: false },
      product: { type: DataTypes.JSONB, allowNull: false },
      basic_info: { type: DataTypes.JSONB },
      documents: { type: DataTypes.ARRAY(DataTypes.JSONB) },
      kyc_details: { type: DataTypes.JSONB },
      combined_form_flag: { type: DataTypes.BOOLEAN, defaultValue: false },
      bank_account: { type: DataTypes.JSONB },
      serial_number: { type: DataTypes.INTEGER },
      nominees: { type: DataTypes.ARRAY(DataTypes.JSONB) },
      account_type: {
        type: DataTypes.STRING,
        index: true,
        defaultValue: 'tier-one',
        enum: [ 'tier-one', 'tier-two' ],
      },
      plan_type: { type: DataTypes.STRING, defaultValue: 'auto' },
      life_cycle_fund_type: { type: DataTypes.STRING },
      tier_one_active_plan_scheme: { type: DataTypes.ARRAY(DataTypes.JSON) },
      tier_two_active_plan_scheme: { type: DataTypes.ARRAY(DataTypes.JSON) },
      scheme_preference_details: { type: DataTypes.JSON },
      other_details: { type: DataTypes.JSON },
      investment_details: { type: DataTypes.JSON },
      status: {
        type: DataTypes.STRING,
        index: true,
        defaultValue: 'initiated',
        ENUM: [ 'initiated', 'created', 'payment-initiated', 'payment-pending', 'payment-success', 'payment-failed',
          'submitted', 'document-upload', 'failed', 'rejected', 'cancelled', 'issued' ],
      },
      transaction_id: { type: DataTypes.STRING, unique: true },
      investment_type: { type: DataTypes.STRING, ENUM: [ 'lumpsum', 'monthly' ] },
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
      offer_id: { type: DataTypes.UUID },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  order.associate = (models) => {
    order.hasMany(models.order_history, {
      foreignKey: 'order_id',
    });
    order.hasMany(models.payment, {
      foreignKey: 'order_id',
    });
    order.hasMany(models.mandate, {
      foreignKey: 'order_id',
    });
    order.hasMany(models.sip, {
      foreignKey: 'order_id',
    });
  };

  return order;
};
