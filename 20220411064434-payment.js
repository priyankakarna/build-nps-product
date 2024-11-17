module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('payment', {
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
  }),
  down: (queryInterface) => queryInterface.dropTable('payment'),
};
