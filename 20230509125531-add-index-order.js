module.exports = {
  up: async (queryInterface) => queryInterface.addIndex('order', [ 'status', 'investment_type' ]),
  down: (queryInterface) => queryInterface.removeIndex('order', [ 'status', 'investment_type' ]),
};
