module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all([
    queryInterface.addColumn('payment', 'callback', { type: Sequelize.JSONB }, { transaction }),
  ])),

  down: (queryInterface) => queryInterface.sequelize.transaction((transaction) => Promise.all([
    queryInterface.removeColumn('payment', 'callback', { transaction }),
  ])),
};
