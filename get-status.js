const getStatus = {
  title: 'get status',
  description: 'Defines the structure for HTTP GET request body',
  type: 'object',
  properties: {
    orderId: {
      type: 'string',
      description: 'publicId of the order',
      format: 'uuid',
    },
    partnerCode: {
      type: 'string',
      description: 'partner code',
    },
    methodName: {
      type: 'string',
      description: 'method name',
    },
  },
  required: [ 'orderId' ],
  errorMessage: {
    required: {
      orderId: 'Parameter: orderId is required',
    },
    properties: {
      orderId: 'Parameter: orderId should be a valid uuid.',
    },
  },
  additionalProperties: true,
};

module.exports = getStatus;
