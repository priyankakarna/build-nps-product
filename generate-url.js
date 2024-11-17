const generateUrl = {
  title: 'generate url',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    orderId: {
      type: 'string',
      description: 'unique reference of order',
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
  required: [ 'orderId', 'partnerCode' ],
  errorMessage: {
    required: {
      orderId: 'Parameter: orderId is required in the body.',
      partnerCode: 'Parameter: partnerCode is required in the body.',
    },
    properties: {
      orderId: 'Parameter: orderId should be valid uuid.',
      partnerCode: 'Parameter: partnerCode should be valid string',
    },
  },
  additionalProperties: false,
};

module.exports = generateUrl;
