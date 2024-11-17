module.exports = (sequelize, DataTypes) => {
  const paymentHistory = sequelize.define(
    'payment_history',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'payment', key: 'id' },
        name: 'payment_foreign_idx',
      },
      status: {
        type: DataTypes.STRING,
        index: true,
        defaultValue: 'initiated',
        enum: [ 'initiated', 'created', 'pending', 'processed', 'failed', 'rejected' ],
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
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  paymentHistory.associate = (models) => {
    paymentHistory.belongsTo(models.payment, {
      foreignKey: 'payment_id',
    });
  };

  return paymentHistory;
};
