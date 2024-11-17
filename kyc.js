const kyc = {
  title: 'check duplicate',
  description: 'Defines the structure for check duplicate',
  type: 'object',
  properties: {
    userId: {
      type: 'string',
      description: 'unique reference of user',
      format: 'uuid',
    },
    createdBy: {
      type: 'string',
      format: 'uuid',
    },
    updatedBy: {
      type: 'string',
      format: 'uuid',
    },
    ownership: {
      type: [ 'string', 'null' ],
      description: 'residence type',
    },
    profile: {
      type: 'object',
      properties: {
        panNumber: {
          type: 'string',
          description: 'user PAN',
          pattern: '^[A-Z]{5}[0-9]{4}[A-Z]{1}$',
          maxLength: 10,
        },
      },
    },
  },
  required: [ 'userId' ],
  errorMessage: {
    required: {
      userId: 'Parameter: userId is required in the body.',
    },
    properties: {
      userId: 'Parameter: userId should be valid uuid.',
    },
  },
  additionalProperties: true,
};

module.exports = kyc;
