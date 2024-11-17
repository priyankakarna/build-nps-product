module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(() => Promise.all(
    [
      queryInterface.addColumn('mandate', 'mode', { type: Sequelize.STRING }),
    ],
  )),

  down: (queryInterface) => queryInterface.sequelize.transaction(() => Promise.all(
    [
      queryInterface.removeColumn('mandate', 'mode'),
    ],
  )),
};
