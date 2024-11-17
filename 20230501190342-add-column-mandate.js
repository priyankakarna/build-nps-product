module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [
      queryInterface.addColumn('mandate', 'partner_code', { type: Sequelize.STRING }, { transaction }),
      queryInterface.addColumn('mandate', 'mandate_link', { type: Sequelize.STRING }, { transaction }),
    ],
  )),

  down: (queryInterface) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [
      queryInterface.removeColumn('mandate', 'partner_code', { transaction }),
      queryInterface.removeColumn('mandate', 'mandate_link', { transaction }),
    ],
  )),
};
