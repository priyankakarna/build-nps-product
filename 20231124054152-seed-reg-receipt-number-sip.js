
const bulkUpdate = async (records, queryInterface) => {
  await Promise.all(records.map(async (regReceiptSequenceNumber, index) => {
    const newRegReceiptSequenceNumber = (regReceiptSequenceNumber + 1).toString().padStart(8, '00000000');

    const [ [ { public_id: publicId } ] ] = await queryInterface.sequelize.query(`select public_id from sip limit 1 offset ${index} `);

    await queryInterface.sequelize.query(`UPDATE public."sip"
    SET reg_receipt_sequence_number = '${newRegReceiptSequenceNumber}' WHERE public_id = '${publicId}' `);

    return true;
  }));
};

module.exports = {
  up: async (queryInterface) => queryInterface.sequelize.transaction(async () => {
    // eslint-disable-next-line max-len
    const [ [ { reg_receipt_sequence_number: regReceiptSequenceNumber } = {} ] ] = await queryInterface.sequelize.query('select reg_receipt_sequence_number FROM "order" order by  id DESC LIMIT 1');
    const [ [ { count } ] ] = await queryInterface.sequelize.query('select count(*) from sip ');

    const lastReceiptNumber = parseInt(regReceiptSequenceNumber);

    const receiptNumberArray = Array.from({ length: count }, (_, index) => index + lastReceiptNumber);

    await bulkUpdate(receiptNumberArray, queryInterface);

    return true;
  }),
  down: (queryInterface) => queryInterface.truncate('reg_receipt_sequence_number', {}),
};
