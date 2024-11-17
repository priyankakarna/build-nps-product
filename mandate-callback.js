const mandateCallback = {
  title: 'mandate callback',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    mandateResponse: {
      type: 'string',
    },
  },
  required: [ 'mandateResponse' ],
  errorMessage: {
    required: {
      mandateResponse: 'Parameter: mandateResponse is required in the body.',
    },
    properties: {
      mandateResponse: 'Parameter: mandateResponse should be valid string.',
    },
  },
  additionalProperties: false,
};

module.exports = mandateCallback;
