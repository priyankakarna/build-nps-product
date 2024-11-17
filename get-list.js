/* eslint-disable max-len */
const getList = {
  title: 'Update status',
  description: 'get list of orders',
  type: 'object',
  properties: {
    limit: {
      type: 'integer',
      description: 'maximum number of orders to be returned',
    },
    offset: {
      type: 'integer',
      description: 'number of orders to be skipped',
    },
    status: {
      type: [ 'string', 'null' ],
      description: 'status of order',
      enum: [ null, 'initiated', 'created', 'payment-initiated', 'payment-created', 'payment-pending', 'payment-success', 'payment-failed',
        'submitted', 'document-upload', 'failed', 'rejected', 'cancelled', 'issued', 'mandate-initiated', 'mandate-created', 'mandate-pending,', 'mandate-failed', 'mandate-cancelled', 'active' ],
    },
    investmentType: {
      type: 'string',
      description: 'investment type of the order',
    },
  },
  required: [ 'limit', 'offset' ],
  errorMessage: {
    required: {
      limit: 'Parameter: limit is required in the body.',
      offset: 'Parameter: offset is required in the body.',
    },
    properties: {
      limit: 'Parameter: limit should be valid string.',
      offset: 'Parameter: offset should be valid string.',
      status: 'Parameter: status should be valid string.',
      investmentType: 'Parameter: status should be a valid string.',
    },
  },
  additionalProperties: false,
};

module.exports = getList;
