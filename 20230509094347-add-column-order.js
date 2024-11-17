module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(() => Promise.all(
    [
      queryInterface.addColumn('order', 'investment_type', { type: Sequelize.STRING }),
    ],
  )),

  down: (queryInterface) => queryInterface.sequelize.transaction(() => Promise.all(
    [
      queryInterface.removeColumn('order', 'investment_type'),
    ],
  )),
};
