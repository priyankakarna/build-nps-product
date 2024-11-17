const preDebitNotification = {
  title: 'pre debit notification',
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
    userId: {
      type: 'string',
      description: 'publicId of the user',
      format: 'uuid',
    },
  },
  required: [ 'orderId', 'partnerCode', 'userId' ],
  errorMessage: {
    required: {
      orderId: 'Parameter: orderId is required in the params.',
      userId: 'Parameter: userId is required in the params.',
      partnerCode: 'Parameter: partnerCode is required .',
    },
    properties: {
      orderId: 'Parameter: orderId should be valid uuid.',
      userId: 'Parameter: userId should be valid uuid.',
      partnerCode: 'Parameter: partnerCode should be valid string.',
    },
  },
  additionalProperties: false,
};

module.exports = preDebitNotification;
