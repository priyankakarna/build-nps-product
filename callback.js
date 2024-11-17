const callback = {
  title: 'mandate callback',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    orderId: {
      type: 'string',
      description: 'publicId of the mandate',
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
    txnid: {
      type: 'string',
      description: 'publicId of the mandate',
      format: 'uuid',
    },
    unmappedstatus: {
      type: 'string',
      description: 'status of the mandate',
    },
  },
  required: [ 'txnid', 'unmappedstatus' ],
  errorMessage: {
    required: {
      txnid: 'Parameter: txnid is required in the body',
      unmappedstatus: 'Parameter: unmappedstatus is required in the body',
    },
    properties: {
      partnerCode: 'Parameter: partnerCode should be valid string.',
      txnId: 'Parameter: txnId should be valid uuid',
      unmappedstatus: 'Parameter: unmappedstatus should be valid string.',
    },
  },
  additionalProperties: true,
};

module.exports = callback;
