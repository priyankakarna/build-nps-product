module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [ queryInterface.addColumn('sip', 'reg_receipt_sequence_number', { type: Sequelize.STRING }, { transaction }) ],
  )),
  down: (queryInterface) => queryInterface.sequelize.transaction((transaction) => Promise.all(
    [ queryInterface.removeColumn('sip', 'reg_receipt_sequence_number', { transaction }) ],
  )),
};
