const createPayment = require('./create-payment');
const callback = require('./callback');
const generateUrl = require('./generate-url');
const mandateCallback = require('./mandate-callback');
const getList = require('./get-list');
const updateStatus = require('./update-status');

module.exports = {
  createPayment, callback, generateUrl, mandateCallback, getList, updateStatus,
};
