const createMandate = require('./create-mandate');
const callback = require('./callback');
const modify = require('./modify-mandate');
const cancel = require('./cancel-mandate');
const updateStatus = require('./update-status');
const getStatus = require('./get-status');
const getList = require('./get-list');
const generateUrl = require('./generate-url');

module.exports = {
  createMandate, callback, modify, cancel, updateStatus, getStatus, getList, generateUrl,
};
