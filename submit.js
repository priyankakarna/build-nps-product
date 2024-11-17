const submit = {
  title: 'submit order',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'publicId of the order',
      format: 'uuid',
    },
    createdBy: {
      type: 'string',
      description: 'userId of the user',
      format: 'uuid',
    },
    profile: {
      type: 'object',
      properties: {
        aadharPhotographUrl: {
          type: [ 'string', 'null' ],
          format: 'uri',
        },
        signatureUrl: {
          type: [ 'string', 'null' ],
          format: 'uri',
        },
        panDocument: {
          type: [ 'object', 'null' ],
          properties: {
            frontFileUrl: {
              type: [ 'string', 'null' ],
              format: 'uri',
            },
          },
        },
        aadhaarDocument: {
          type: [ 'object', 'null' ],
          properties: {
            frontFileUrl: {
              type: [ 'string', 'null' ],
              format: 'uri',
            },
          },
        },
      },
    },
    address: {
      type: [ 'object', 'null' ],
      properties: {
        documentProofFrontFileUrl: { type: [ 'string', 'null' ] },
      },
    },
  },
  required: [ 'publicId' ],
  errorMessage: {
    required: {
      publicId: 'Parameter: publicId is required in the body.',
      createdBy: 'Parameter: createdBy is required in the body.',
    },
    properties: {
      publicId: 'Parameter: publicId should be valid uuid.',
      createdBy: 'Parameter: createdBy should be valid uuid.',
    },
  },
  additionalProperties: true,
};

module.exports = submit;
