const callback = {
  title: 'payment callback',
  description: 'Defines the structure for HTTP POST request body',
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
    txnId: {
      type: 'string',
      description: 'publicId of the payment',
      format: 'uuid',
    },
    unmappedStatus: {
      type: 'string',
      description: 'status of the payment',
    },
    TRANSACTIONSTATUS: {
      type: 'string',
    },
    TRANSACTIONID: {
      type: 'string',
    },
    APTRANSACTIONID: {
      type: 'string',
    },
    MESSAGE: {
      type: 'string',
    },
    AMOUNT: {
      type: 'string',
    },
    CHMOD: {
      type: 'string',
    },
    ap_SecureHash: {
      type: 'string',
    },
    CUSTOMERVPA: {
      type: 'string',
    },
    partnerCodeResponse: {
      allOf: [
        {
          if: {
            properties: {
              partnerCode: {
                const: 'BILLDESK',
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
                const: 'PAYU',
              },
            },
          },
          then: {
            required: [ 'txnId', 'unmappedStatus' ],
          },
        },
        {
          if: {
            properties: {
              partnerCode: {
                const: 'AIRPAY',
              },
            },
          },
          then: {
            required: [ 'TRANSACTIONSTATUS', 'TRANSACTIONID', 'APTRANSACTIONID', 'MESSAGE', 'AMOUNT', 'CHMOD', 'ap_SecureHash' ],
          },
        },
      ],
    },
  },

  errorMessage: {
    required: {
      orderId: 'Parameter: orderId is required in the body',
      transactionResponse: 'Parameter: transactionResponse is required in the body.',
      txnId: 'Parameter: txnId is required in the body',
      unmappedStatus: 'Parameter: unmappedStatus is required in the body',
      TRANSACTIONSTATUS: 'Parameter: transactionStatus is required in the body',
      TRANSACTIONID: 'Parameter: transactionId  is required in the body',
      APTRANSACTIONID: 'Parameter: airpayTransactionId  is required in the body',
      MESSAGE: 'Parameter: message  is required in the body',
      AMOUNT: 'Parameter: amount is required in the body',
      CHMOD: 'Parameter: chmod is required in the body',
      ap_SecureHash: 'Parameter: ap_SecureHash is required in the body',
    },
    properties: {
      orderId: 'Parameter: orderId should be a valid uuid.',
      transactionResponse: 'Parameter: transactionResponse should be valid string.',
      msg: 'Parameter: msg should be valid string.',
      partnerCode: 'Parameter: partnerCode should be valid string.',
      txnId: 'Parameter: txnId should be valid uuid',
      unmappedStatus: 'Parameter: unmappedStatus should be valid string.',
      TRANSACTIONSTATUS: 'Parameter: transactionStatus should be valid string',
      TRANSACTIONID: 'Parameter: transactionId should be valid string',
      APTRANSACTIONID: 'Parameter: airpayTransactionId should be valid string ',
      MESSAGE: 'Parameter: message should be valid string',
      AMOUNT: 'Parameter: amount should be valid string',
      CHMOD: 'Parameter: chmod should be valid string',
      ap_SecureHash: 'Parameter: ap_SecureHash should be valid string',
      CUSTOMERVPA: 'Parameter: customervpa should be valid string',
    },
  },
  additionalProperties: true,
};

module.exports = callback;
