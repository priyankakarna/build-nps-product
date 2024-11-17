module.exports = (sequelize, DataTypes) => {
  const mandateHistory = sequelize.define(
    'mandate_history',
    {
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
        references: { model: 'mandate', key: 'id' },
        name: 'mandate_foreign_idx',
      },
      status: {
        type: DataTypes.STRING,
        index: true,
        defaultValue: 'initiated',
        enum: [ 'initiated', 'created', 'active', 'failed', 'rejected', 'modified', 'modification-request' ],
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

  mandateHistory.associate = (models) => {
    mandateHistory.belongsTo(models.mandate, {
      foreignKey: 'mandate_id',
    });
  };

  return mandateHistory;
};
