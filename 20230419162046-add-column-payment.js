module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [
      queryInterface.addColumn('payment', 'partner_code', { type: Sequelize.STRING }, { transaction }),
      queryInterface.addColumn('payment', 'payment_link', { type: Sequelize.STRING }, { transaction }),
    ],
  )),

  down: (queryInterface) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [
      queryInterface.removeColumn('payment', 'partner_code', { transaction }),
      queryInterface.removeColumn('payment', 'payment_link', { transaction }),
    ],
  )),
};
