const getList = {
  title: 'get-list of sip',
  description: 'Defines the structure for HTTP GET request in the body ',
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
    orderStatus: {
      type: [ 'string', 'null' ],
      description: 'status of order',
    },
    sipStatus: {
      type: [ 'string', 'null' ],
      description: 'status of sip',
    },
    orderId: {
      type: 'string',
      description: 'unique reference of order',
      format: 'uuid',
    },
  },
  required: [ 'limit', 'offset' ],
  errorMessage: {
    required: {
      limit: 'Parameter: limit is required in the body.',
      offset: 'Parameter: offset is required in the body.',
    },
    properties: {
      limit: 'Parameter: limit should be valid integer.',
      offset: 'Parameter: offset should be valid integer.',
      orderStatus: 'Parameter: status should be valid string.',
      sipStatus: 'Parameter: status should be valid string.',
      orderId: 'Parameter: orderId should be valid uuid.',
    },
  },
  additionalProperties: false,
};

module.exports = getList;
