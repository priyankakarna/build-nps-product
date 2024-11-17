const modifyMandate = {
  title: 'modify mandate',
  description: 'Defines the structure for HTTP PATCH request body',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'publicId of the order',
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
    userId: {
      type: 'string',
      description: 'publicId of the user',
      format: 'uuid',
    },
    investedAmount: {
      type: 'string',
      pattern: '^(100000|[1-9][0-9]{3,4})$',
    },
    tenureYears: {
      type: [ 'string', 'null' ],
    },
    installmentDate: {
      type: [ 'string', 'null' ],
    },
  },
  required: [ 'publicId', 'partnerCode' ],
  errorMessage: {
    required: {
      publicId: 'Parameter: publicId is required.',
      partnerCode: 'Parameter: partnerCode is required.',
    },
    properties: {
      publicId: 'Parameter: publicId should be valid uuid.',
      userId: 'Parameter: userId should be valid uuid.',
      partnerCode: 'Parameter: partnerCode should be valid string.',
      investedAmount: 'Parameter: amount should be valid string',
      tenureYears: 'Parameters: tenureYears should be  valid string',
      installmentDate: 'Parameter: installmentDate should be valid string',
    },
  },
  additionalProperties: false,
};

module.exports = modifyMandate;
