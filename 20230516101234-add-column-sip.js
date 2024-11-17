module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(() => Promise.all(
    [
      queryInterface.addColumn('sip', 'amount', { type: Sequelize.INTEGER }),
    ],
  )),

  down: (queryInterface) => queryInterface.sequelize.transaction(() => Promise.all(
    [
      queryInterface.removeColumn('sip', 'amount'),
    ],
  )),
};
