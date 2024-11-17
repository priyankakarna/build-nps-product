const skipSip = {
  title: 'skip SIP',
  description: 'Defines the structure for HTTP PATCH request body',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'publicId of SIP',
      format: 'uuid',
    },
    partnerCode: {
      type: 'string',
      description: 'partner code',
    },
    userId: {
      type: 'string',
      description: 'publicId of the user',
      format: 'uuid',
    },
  },
  required: [ 'publicId' ],
  errorMessage: {
    required: {
      publicId: 'Parameter: publicId is required',
    },
    properties: {
      publicId: 'Parameter: publicId should be valid uuid.',
      partnerCode: 'Parameter: partnerCode should be valid string.',
      userId: 'Parameter: userId should be valid uuid.',
    },
  },
  additionalProperties: false,
};

module.exports = skipSip;
