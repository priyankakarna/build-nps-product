module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('mandate', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
    user_id: { type: DataTypes.UUID, allowNull: false },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id',
      },
    },
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
      enum: [ 'initiated', 'created', 'active', 'failed', 'rejected', 'modified' ],
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
  down: (queryInterface) => queryInterface.dropTable('mandate'),
};
