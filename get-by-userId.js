const getByUserId = {
  title: 'get details by user Id',
  description: 'Defines the structure for HTTP GET request body',
  type: 'object',
  properties: {
    userId: {
      type: 'string',
      description: 'unique reference id of user',
      format: 'uuid',
    },
    status: {
      type: 'array',
      description: 'status of the order',
    },
    investmentType: {
      type: 'string',
      description: 'investment type of the order',
    },
  },
  required: [ 'userId' ],
  errorMessage: {
    required: {
      userId: 'Parameter: userId is required in the body.',
    },
    properties: {
      userId: 'Parameter: userId should be a valid uuid.',
      status: 'Parameter: status should be a valid array.',
      investmentType: 'Parameter: status should be a valid string.',
    },
  },
  additionalProperties: true,
};

module.exports = getByUserId;
