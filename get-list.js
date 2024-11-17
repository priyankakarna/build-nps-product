const getListByOrderId = {
  title: 'get list of sip by order Id',
  description: 'Defines the structure for HTTP GET request body',
  type: 'object',
  properties: {
    orderId: {
      type: 'string',
      description: 'unique reference id of order',
      format: 'uuid',
    },
    status: {
      type: 'string',
      description: 'status of the sip',
    },
    pageSize: {
      anyOf: [
        {
          type: 'string',
          pattern: '^[0-9]',
          minLength: 2,
          maxLength: 4,
        },
        {
          type: 'integer',
          minimum: 10,
          maximum: 1000,
        } ],
      description: 'pageSize.',
    },
    pageNumber: {
      anyOf: [
        {
          type: 'string',
          pattern: '^[0-9]',
          minLength: 1,
          maxLength: 4,
        },
        {
          type: 'integer',
          minimum: 1,
          maximum: 100,
        } ],
      description: 'pageNumber.',
    },
  },
  required: [ 'orderId' ],
  errorMessage: {
    required: {
      orderId: 'Parameter: orderId is required in the arguments.',
    },
    properties: {
      orderId: 'Parameter: orderId should be a valid uuid.',
      status: 'Parameter: status should be a valid string.',
      pageNumber: 'Parameter: pageNumber should be integer',
      pageSize: 'Parameter: pageSize should be integer',
    },
  },
  additionalProperties: false,
};

module.exports = getListByOrderId;
