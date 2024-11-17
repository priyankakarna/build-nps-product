const getByPublicId = {
  title: 'get by public id order',
  description: 'Defines the structure for HTTP GET request body',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'unique reference of order',
      format: 'uuid',
    },
  },
  required: [ 'publicId' ],
  errorMessage: {
    required: {
      publicId: 'Parameter: publicId is required in the body.',
    },
    properties: {
      publicId: 'Parameter: publicId should be valid uuid.',
    },
  },
  additionalProperties: false,
};

module.exports = getByPublicId;
