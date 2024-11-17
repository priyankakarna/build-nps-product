module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('sip', {
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
    mandate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'mandate', key: 'id' },
      name: 'mandate_foreign_idx',
    },
    payment_id: {
      type: DataTypes.INTEGER,
      references: { model: 'payment', key: 'id' },
      name: 'payment_foreign_idx',
    },
    installment_date: { type: DataTypes.DATEONLY, allowNull: false },
    pre_debit_notification_status: { type: DataTypes.BOOLEAN, defaultValue: false },
    invoice_number: { type: DataTypes.STRING },
    status: {
      type: DataTypes.STRING,
      enum: [
        'pending',
        'success',
        'failed',
        'skipped',
      ],
      defaultValue: 'pending',
    },
    reference_id: { type: DataTypes.STRING, unique: true },
    response: { type: DataTypes.JSONB },
    request: { type: DataTypes.JSONB },
    created_by: {
      type: DataTypes.UUID,
    },
    updated_by: {
      type: DataTypes.UUID,
    },
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
  }).then(() => queryInterface.addIndex(
    'sip',
    [ 'order_id', 'mandate_id', 'payment_id', 'status' ],
  )),
  down: (queryInterface) => queryInterface.dropTable('sip'),
};
