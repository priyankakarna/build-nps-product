const partner = require('../seed/partner');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('partner', partner, {}),
  down: (queryInterface) => queryInterface.truncate('partner', {}),
};
