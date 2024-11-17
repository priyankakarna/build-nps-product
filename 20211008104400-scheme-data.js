module.exports = {
  up: async (queryInterface, DataTypes) => {
    queryInterface.createTable('scheme_data', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fund_code: { type: DataTypes.STRING },
      scheme_code: { type: DataTypes.STRING },
      scheme: { type: DataTypes.STRING },
      pfm: { type: DataTypes.STRING },
      asset_category: { type: DataTypes.STRING },
      ia_min_percentage: { type: DataTypes.INTEGER },
      ia_max_percentage: { type: DataTypes.INTEGER },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        index: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        index: true,
      },
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('scheme_data');
  },
};
