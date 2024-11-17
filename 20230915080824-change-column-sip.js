module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [ queryInterface.changeColumn('sip', 'mandate_id', { type: Sequelize.INTEGER, allowNull: true }, { transaction }) ],
    [ queryInterface.changeColumn('sip', 'amount', { type: Sequelize.FLOAT }, { transaction }) ],
  )),
  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [ queryInterface.changeColumn('sip', 'mandate_id', { type: Sequelize.INTEGER, allowNull: false }, { transaction }) ],
    [ queryInterface.changeColumn('sip', 'amount', { type: Sequelize.INTEGER }, { transaction }) ],
  )),
};
