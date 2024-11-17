module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('mandate_history', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
    mandate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mandate',
        key: 'id',
      },
    },
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
  down: (queryInterface) => queryInterface.dropTable('mandate_history'),
};
