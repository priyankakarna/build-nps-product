module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('order', 'offer_id', {
      type: Sequelize.UUID,
    });
  },
  down: async (queryInterface) => {
    queryInterface.removeColumn('order', 'offer_id');
  },
};
