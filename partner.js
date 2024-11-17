const { v1: uuid } = require('uuid');

const data = [
  {
    code: 'ICICI_PRUDENTIAL',
    name: 'ICICI Prudential',
    description: 'National pension scheme ',
    tags: '',
    logo_url: 'https://eazyfin.s3.ap-south-1.amazonaws.com/public-doc/9c241d10-c6b7-11ec-b805-cfb9d55e0939-nps-icon.png',
    website: 'https://enps.nsdl.com/eNPS/NationalPensionSystem.html',
    terms_conditions: 'https://enps.nsdl.com/eNPS/NationalPensionSystem.html',
    status: 'active',
  },
];
const partner = data.map((element) => ({
  ...element,
  public_id: uuid(),
  concurrency_stamp: uuid(),
  created_at: new Date(),
  updated_at: new Date(),
}));

module.exports = partner;
