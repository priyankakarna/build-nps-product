/* eslint-disable max-len */
let offset = 0;

const updateInvestmentType = async (count, queryInterface) => {
  if (offset === parseInt(count)) {
    return true;
  }

  const response = await queryInterface.sequelize.query(`select o.investment_details  ->> 'investmentType' as investment_type , o.public_id as public_id from public."order" o ORDER BY o.id  desc limit 1 offset ${offset};`);

  if (response) {
    const [ [ { public_id: publicId, investment_type: investmentType } = {} ] ] = response;

    await queryInterface.sequelize.query(`UPDATE public."order" SET investment_type='${investmentType}' WHERE public_id='${publicId}'`);

    offset += 1;
    await updateInvestmentType(count, queryInterface);
  }

  return true;
};

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async () => {
      const [ [ { count } ] ] = await queryInterface.sequelize.query('select count(*) as count from public."order" o  ');

      await updateInvestmentType(count, queryInterface);

      return true;
    });
  },
};
