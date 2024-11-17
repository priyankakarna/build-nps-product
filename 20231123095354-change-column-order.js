module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [ queryInterface.changeColumn('order', 'reg_receipt_sequence_number', { type: Sequelize.STRING, allowNull: false }, { transaction }) ],
  )),
  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [ queryInterface.changeColumn('order', 'reg_receipt_sequence_number', { type: Sequelize.STRING }, { transaction }) ],
  )),
};
