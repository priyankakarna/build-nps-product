const updateStatus = {
  title: 'Update status',
  description: 'Defines the structure updation of status of order',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'unique reference of order',
      format: 'uuid',
    },
    status: {
      type: 'string',
      description: 'status of the order',
      enum: [ 'submitted', 'document-pending', 'failed', 'cancelled', 'rejected', 'processed', 'issued' ],
    },
    description: {
      type: 'string',
      description: 'description related to order',
      maxLength: 255,
    },
    remark: {
      type: 'string',
      description: 'remark for order',
      maxLength: 255,
    },
    createdBy: {
      type: 'string',
      description: 'unique reference of createdBy',
      format: 'uuid',
    },
  },
  required: [ 'publicId', 'status', 'createdBy' ],
  errorMessage: {
    required: {
      publicId: 'Parameter: publicId is required in the body.',
      status: 'Parameter: status is required in the body.',
      createdBy: 'Parameter: createdBy is required in the body.',
    },
    properties: {
      publicId: 'Parameter: publicId should be valid uuid.',
      status: 'Parameter: status should be valid string.',
      createdBy: 'Parameter: createdBy should be valid uuid.',
    },
  },
  additionalProperties: false,
};

module.exports = updateStatus;
