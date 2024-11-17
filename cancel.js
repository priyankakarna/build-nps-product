const cancel = {
  title: 'Cancel order',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'unique reference of order',
      format: 'uuid',
    },
    userId: {
      type: 'string',
      description: 'unique reference of user',
      format: 'uuid',
    },
    remark: {
      type: [ 'string', 'null' ],
      description: 'remark for order',
      maxLength: 255,
    },
  },
  required: [ 'publicId', 'userId' ],
  errorMessage: {
    required: {
      publicId: 'Parameter: publicId is required in the body.',
      userId: 'Parameter: userId is required in the body.',
    },
    properties: {
      publicId: 'Parameter: publicId should be valid uuid.',
      userId: 'Parameter: userId should be valid uuid.',
      remark: 'Parameter: remark should be a valid string.',
    },
  },
  additionalProperties: false,
};

module.exports = cancel;
