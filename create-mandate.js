const createMandate = {
  title: 'create mandate',
  description: 'Defines the structure for HTTP POST request body',
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
    ipAddress: {
      type: 'string',
      description: 'ip address of user',
    },
    userAgent: {
      type: 'string',
      description: 'device details of user',
    },
  },
  required: [ 'orderId', 'ipAddress', 'userAgent', 'partnerCode' ],
  errorMessage: {
    required: {
      orderId: 'Parameter: orderId is required in the body.',
      ipAddress: 'Parameter: ipAddress is required in the body.',
      userAgent: 'Parameter: userAgent is required in the body.',
      partnerCode: 'Parameter: partnerCode is required in the body.',
    },
    properties: {
      orderId: 'Parameter: orderId should be valid uuid.',
      ipAddress: 'Parameter: ipAddress should be valid string.',
      userAgent: 'Parameter: userAgent should be valid string.',
      partnerCode: 'Parameter: partnerCode should be valid string.',
    },
  },
  additionalProperties: false,
};

module.exports = createMandate;
