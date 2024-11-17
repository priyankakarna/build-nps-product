module.exports = (sequelize, DataTypes) => {
  const orderHistory = sequelize.define(
    'order_history',
    {
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'order', key: 'id' },
        name: 'order_foreign_idx',
      },
      status: {
        type: DataTypes.STRING,
        index: true,
        defaultValue: 'initiated',
        ENUM: [ 'initiated', 'created', 'payment-initiated', 'payment-pending', 'payment-success', 'payment-failed',
          'submitted', 'document-upload', 'failed', 'rejected', 'cancelled', 'issued' ],
      },
      description: { type: DataTypes.STRING(200), allowNull: true },
      remark: { type: DataTypes.STRING(200), allowNull: true },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      is_deleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      created_by: DataTypes.UUID,
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

  orderHistory.associate = (models) => {
    orderHistory.belongsTo(models.order, {
      foreignKey: 'order_id',
    });
  };

  return orderHistory;
};
