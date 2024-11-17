module.exports = (sequelize, DataTypes) => {
  const mandate = sequelize.define(
    'mandate',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'order', key: 'id' },
        name: 'order_foreign_idx',
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      user_id: { type: DataTypes.UUID, allowNull: false },
      start_date: { type: DataTypes.STRING, allowNull: false },
      end_date: { type: DataTypes.STRING, allowNull: false },
      installment_day: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.FLOAT, allowNull: false },
      response: { type: DataTypes.JSON },
      valid_till: { type: DataTypes.DATE },
      status: {
        type: DataTypes.STRING,
        index: true,
        defaultValue: 'initiated',
        enum: [ 'initiated', 'created', 'pending', 'active', 'rejected', 'failed', 'modified', 'cancelled' ],
      },
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
      partner_code: {
        type: DataTypes.STRING,
      },
      mandate_link: {
        type: DataTypes.STRING,
      },
      mode: {
        type: DataTypes.STRING,
      },
      mode_type: {
        type: DataTypes.STRING,
      },
      billing_amount: {
        type: DataTypes.FLOAT,
      },
      card_token: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  mandate.associate = (models) => {
    mandate.hasMany(models.mandate_history, {
      foreignKey: 'mandate_id',
    });
    mandate.belongsTo(models.order, {
      foreignKey: 'order_id',
    });
  };

  return mandate;
};
