const getGstDetails = {
  title: 'get gst details',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    userId: {
      type: 'string',
      description: 'userId',
      format: 'uuid',
    },
    amount: {
      type: 'number',
      description: 'contribution amount',
    },
    orderId: {
      type: [ 'string', 'null' ],
      description: 'unique reference of order',
      format: 'uuid',
    },
    investmentType: {
      type: [ 'string', 'null' ],
      description: 'investment type of the order',
    },
  },
  required: [ 'userId', 'amount' ],
  errorMessage: {
    required: {
      userId: 'Parameter: userId is required in the body.',
      amount: 'Parameter: amount is required in the body.',
    },
    properties: {
      userId: 'Parameter: userId should be a valid uuid.',
      orderId: 'Parameter: orderId should be a valid uuid.',
      amount: 'Parameter: amount should be a valid number.',
    },
  },
  additionalProperties: false,
};

module.exports = getGstDetails;
