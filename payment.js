module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    'payment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'order', key: 'id' },
        name: 'order_foreign_idx',
      },
      investment_details: { type: DataTypes.JSON },
      valid_till: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      device_details: { type: DataTypes.JSON },
      response: { type: DataTypes.JSON },
      status: {
        type: DataTypes.STRING,
        index: true,
        defaultValue: 'initiated',
        enum: [ 'initiated', 'created', 'pending', 'processed', 'failed', 'rejected' ],
      },
      callback: { type: DataTypes.JSONB },
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
      payment_link: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  payment.associate = (models) => {
    payment.hasMany(models.payment_history, {
      foreignKey: 'payment_id',
    });
    payment.belongsTo(models.order, {
      foreignKey: 'order_id',
    });
  };

  return payment;
};
