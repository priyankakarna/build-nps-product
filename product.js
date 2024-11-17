const { v1: uuid } = require('uuid');

const data = [
  {
    code: 'NPS',
    name: 'NPS',
    logo_url: 'https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/06d70aa0-c6d6-11ec-b805-cfb9d55e0939-nps-icon.png',
    category: 'nps',
    description: 'National pension scheme',
    status: 'active',
  } ];
const productType = data.map((element) => ({
  ...element, public_id: uuid(), concurrency_stamp: uuid(), created_at: new Date(), updated_at: new Date(),
}));

module.exports = productType;
