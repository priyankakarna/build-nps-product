module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all([
    queryInterface.addColumn('order', 'transaction_id', { type: Sequelize.STRING, unique: true }, { transaction }),
  ])),

  down: (queryInterface) => queryInterface.sequelize.transaction((transaction) => Promise.all([
    queryInterface.removeColumn('order', 'transaction_id', { transaction }),
  ])),
};
