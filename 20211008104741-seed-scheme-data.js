const path = require('path');

const csv = require('csvtojson/v2');

const load = async () => csv().fromFile(path.join(__dirname, '../../utils/csv/scheme-data-v1.csv'));
const bulkInsert = async (records, queryInterface) => {
  const response = records.map((element) => {
    const {
      Fund_Code: fundCode,
      Scheme_Code: schemeCode,
      Scheme: scheme,
      PFM: pfm,
      AssetCategory: assetCategory,
      IA_MinPercentage: iaMinPercentage,
      IA_MaxPercentage: iaMaxPercentage,
    } = element;

    return {
      fund_code: fundCode,
      scheme_code: schemeCode,
      scheme,
      pfm,
      asset_category: assetCategory,
      ia_min_percentage: iaMinPercentage,
      ia_max_percentage: iaMaxPercentage,
      created_at: new Date(),
      updated_at: new Date(),
    };
  });

  await queryInterface.bulkInsert('scheme_data', response, {});
};

module.exports = {
  up: async (queryInterface) => queryInterface.sequelize.transaction(async () => {
    if (process.env.NODE_ENV === 'test') {
      return true;
    }

    const records = await load();
    const list = Array.from(Array(Math.ceil(records.length / 2000)), (_, index) => index + 1);

    await Promise.all(list.map(async () => {
      const batch = records.splice(0, 2000);
      const res = await bulkInsert(batch, queryInterface);

      return res;
    }));

    return true;
  }),

  down: (queryInterface) => queryInterface.truncate('scheme_data', {}),
};
