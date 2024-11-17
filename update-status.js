const updateStatus = {
  title: 'update-status',
  description: 'Defines the structure for HTTP PATCH request body',
  type: 'object',
  properties: {
    orderId: {
      type: 'string',
      description: 'publicId of the payment',
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
    transactionResponse: {
      type: 'string',
    },
    msg: {
      type: [ 'string', 'null' ],
    },
    partnerCodeResponse: {
      allOf: [
        {
          if: {
            properties: {
              partnerCode: {
                const: '',
              },
            },
          },
          then: {
            required: [ 'orderId', 'transactionResponse' ],
          },
        },
        {
          if: {
            properties: {
              partnerCode: {
                const: 'pay-u',
              },
            },
          },
          then: {
            required: [ 'orderId' ],
          },
        },
      ],
    },
  },

  errorMessage: {
    required: {
      orderId: 'Parameter: orderId is required',
      transactionResponse: 'Parameter: transactionResponse is required in the body.',
    },
    properties: {
      orderId: 'Parameter: orderId should be a valid uuid.',
      transactionResponse: 'Parameter: transactionResponse should be valid string.',
      msg: 'Parameter: msg should be valid string.',
    },
  },
  additionalProperties: true,
};

module.exports = updateStatus;
