module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('order_history', {
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
      references: {
        model: 'order',
        key: 'id',
      },
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
  }),

  down: (queryInterface) => queryInterface.dropTable('order_history'),
};
