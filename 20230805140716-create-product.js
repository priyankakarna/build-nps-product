module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
    code: { type: DataTypes.STRING, unique: true, allowNull: false },
    name: { type: DataTypes.STRING },
    logo_url: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING, defaultValue: 'active', index: true },
    concurrency_stamp: { type: DataTypes.UUID, unique: true, allowNull: false },
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
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
  down: (queryInterface) => queryInterface.dropTable('product'),
};
