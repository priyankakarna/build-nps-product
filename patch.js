/* eslint-disable max-lines */
const patch = {
  title: 'save order form',
  description: 'Defines the structure for save order',
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
    partnerCode: {
      type: 'string',
      description: 'unique reference of partner',
    },
    productCode: {
      type: 'string',
      description: 'unique reference of product',
      const: 'NPS',

    },
    ownership: {
      type: [ 'string', 'null' ],
      description: 'residence type',
    },
    schemePreferenceDetails: {
      type: 'object',
      description: 'scheme preference details',
      properties: {
        accountType: {
          type: 'string',
        },
        pfmCode: {
          type: 'string',
        },
        schemeCode: {
          type: 'string',
        },
        pfmName: {
          type: 'string',
        },
        pfmIcon: {
          type: 'string',
        },
      },
    },
    profile: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        firstName: {
          type: 'string',
          description: 'firstName',
        },
        middleName: {
          type: [ 'string', 'null' ],
          description: 'middleName',
        },
        lastName: {
          type: [ 'string', 'null' ],
          description: 'lastName',

        },
        mobileNumber: {
          type: 'string',
          description: 'Mobile number for registration',
          pattern: '^[1-9]{1}[0-9]{9}',
          maxLength: 10,
        },
        dob: {
          type: 'string',
          description: 'date of birth',
          oneOf: [
            {
              format: 'date',
            },
            {
              format: 'date-time',
            },
          ],
        },
        primaryEmail: {
          type: [ 'string', 'null' ],
          format: 'email',
          description: 'Primary email',
        },
        gender: {
          type: 'string',
          description: 'gender',
          enum: [ 'male', 'female', 'other' ],
        },
        maritalStatus: {
          type: [ 'string', 'null' ],
          description: 'marital status',
          enum: [ null, 'single', 'unmarried', 'married', 'widowed', 'divorced', 'widow', 'separated' ],
        },
        title: {
          type: [ 'string', 'null' ],
          description: 'title',
          enum: [ null, 'Mr.', 'Ms.', 'Mrs.', 'Miss.', 'Dr.' ],
        },
        employmentType: {
          type: [ 'string', 'null' ],
          description: 'employment type',
          enum: [ null, 'salaried', 'self-employed', 'student', 'homemaker', 'professional', 'self-employed/proprietorship', 'retired', 'pensioner' ],
        },
        fatherName: {
          type: [ 'string', 'null' ],
        },
        motherName: {
          type: [ 'string', 'null' ],
        },
        secondaryEmail: {
          type: [ 'string', 'null' ],
          format: 'email',
          description: 'Secondary email',
        },
        panNumber: {
          type: 'string',
          description: 'user PAN',
          pattern: '^[A-Z]{5}[0-9]{4}[A-Z]{1}$',
          maxLength: 10,
        },
        aadharNumber: {
          type: [ 'string', 'null' ],
        },
        maskedAadharNumber: {
          type: [ 'string', 'null' ],
        },
        religion: {
          type: [ 'string', 'null' ],
          description: 'user religion',
          enum: [ null, 'Christianity', 'Judaism', 'Hinduism', 'Buddhism', 'Islam', 'Myth', 'Daoism', 'Mesopotamian', 'Sikhism', 'Jainism', 'Other',
            'christianity', 'judaism', 'hinduism', 'buddhism', 'islam', 'myth', 'daoism', 'mesopotamian', 'sikhism', 'jainism', 'other' ],
        },
        category: {
          type: [ 'string', 'null' ],
          description: 'category of the user',
          enum: [ null, 'General', 'SC', 'ST', 'OBC', 'Other', 'other', 'general', 'sc', 'st', 'obc' ],
        },
        familyIncome: {
          type: [ 'string', 'null' ],
        },
      },
    },
    bankAccount: {
      type: [ 'object', 'null' ],
      description: 'bankAccount',
      properties:
      {
        publicId: {
          type: [ 'string', 'null' ],
          description: 'unique reference of bank account',
          format: 'uuid',
        },
        bank: {
          type: [ 'object', 'null' ],
          properties:
          {
            publicId: {
              type: [ 'string', 'null' ],
              description: 'unique reference of bank',
              format: 'uuid',
            },
            code: {
              type: [ 'string', 'null' ],
            },
            status: {
              type: [ 'string', 'null' ],
            },
          },
        },
        accountName: {
          type: [ 'string', 'null' ],
          description: 'Account Name',
        },
        accountNumber: {
          type: [ 'string', 'null' ],
          description: 'Account Number',

        },
        accountType: {
          type: [ 'string', 'null' ],
          description: 'Type of account',
          enum: [ null, 'saving', 'current', 'overdraft' ],
        },
        bankName: {
          type: [ 'string', 'null' ],
          description: 'Bank Name',
        },
        bankId: {
          type: [ 'string', 'null' ],
          description: 'Bank Id',
          format: 'uuid',
        },

        ifscCode: {
          type: [ 'string', 'null' ],
          description: 'ifsc code.',
          pattern: '^[0-9A-Za-z]+$',
          minLength: 11,
          maxLength: 11,
        },
        status: {
          type: 'string',
          const: 'verified',
        },
      },
    },
    accountType: {
      type: 'string',
      enum: [ 'tier-one', 'tier-two' ],
    },
    planType: {
      type: 'string',
      enum: [ 'auto', 'active' ],
    },
    nominees:
    {
      type: 'array',
      description: 'nominees',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          relationship: {
            type: 'string',
          },
          dob: {
            type: 'string',
            oneOf: [
              {
                format: 'date',
              },
              {
                format: 'date-time',
              },
            ],
          },
          share: {
            type: 'number',
            maxLength: 3,
          },
          mobileNumber: {
            type: [ 'string', 'null' ],
            pattern: '^[1-9]{1}[0-9]{9}',
            maxLength: 10,
          },
          nomineeId: {
            type: [ 'string', 'null' ],
          },
          address: {
            type: [ 'object', 'null' ],
            description: 'address of nominee',
            properties: {
              addressType: {
                type: [ 'string', 'null' ],
                description: 'type of address',
                enum: [ null, 'current', 'permanent', 'business', 'office' ],
              },
              addressLine1: {
                type: [ 'string', 'null' ],
                description: 'address line one',
              },
              addressLine2: {
                type: [ 'string', 'null' ],
                description: 'address line two',
              },
              landmark: {
                type: [ 'string', 'null' ],
                description: 'address line three',
              },
              districtName: {
                type: [ 'string', 'null' ],
                description: 'districtName',
              },
              state: {
                type: [ 'object', 'null' ],
                description: 'state',
                properties: {
                  name: {
                    type: [ 'string', 'null' ],
                  },
                  code: {
                    type: [ 'string', 'null' ],
                  },
                },
              },
              pincode: {
                type: [ 'string', 'null' ],
                description: 'pincode',
              },
              stateName: {
                type: [ 'string', 'null' ],
                description: 'stateName',
              },
            },
          },
        },
      },
    },
    lifeCycleFundType: {
      type: 'string',
    },
    fundManager: {
      type: 'string',
    },
    tierOneActivePlanScheme: {
      type: [ 'array', 'null' ],
      items: {
        type: 'object',
        properties: {
          category: { type: [ 'string', 'null' ] },
          percentage: { type: [ 'string', 'null' ] },
        },
      },
    },
    tierTwoActivePlanScheme: {
      type: [ 'array', 'null' ],
      items: {
        type: 'object',
        properties: {
          category: { type: [ 'string', 'null' ] },
          percentage: { type: [ 'string', 'null' ] },
        },
      },
    },
    investmentDetails: {
      type: 'object',
      properties: {
        investmentType: {
          type: 'string',
          enum: [ 'monthly', 'lumpsum' ],
        },
        installmentDate: {
          type: [ 'string', 'null' ],
        },
        tenure: {
          type: [ 'string', 'null' ],
        },
        tenureYears: {
          type: [ 'string', 'null' ],
        },
        oneTimeFee: {
          type: [ 'string', 'null' ],
        },
        serviceCharge: {
          type: [ 'string', 'null' ],
        },
        totalAmount: {
          type: 'string',
        },
        sgst: {
          type: [ 'string', 'null' ],
        },
        cgst: {
          type: [ 'string', 'null' ],
        },
        igst: {
          type: [ 'string', 'null' ],
        },
        utgst: {
          type: [ 'string', 'null' ],
        },
        startDate: {
          type: [ 'string', 'null' ],
        },
        endDate: {
          type: [ 'string', 'null' ],
        },
      },
      allOf: [
        {
          if: {
            properties: {
              investmentType: {
                const: 'monthly',
              },
            },
          },
          then: {
            properties: {
              investedAmount: {
                anyOf: [
                  {
                    type: 'string',
                    minLength: 4,
                    maxLength: 5,
                  },
                  {
                    type: 'number',
                    minimum: 1000,
                    maximum: 100000,
                  },
                  {
                    type: 'string',
                    const: '100000',
                  },
                ],
              },
            },
          },
        },
        {
          if: {
            properties: {
              investmentType: {
                const: 'lumpsum',
              },
            },
          },
          then: {
            properties: {
              investedAmount: {
                anyOf: [
                  {
                    type: 'string',
                    minLength: 4,
                    maxLength: 7,
                  },
                  {
                    type: 'number',
                    minimum: 1000,
                    maximum: 10000000,
                  },
                  {
                    type: 'string',
                    const: '10000000',
                  },
                ],
              },
            },
          },
        },
      ],
    },
    combinedFormFlag: {
      type: 'boolean',
    },
    serial_number: {
      type: 'string',
    },
    otherDetails: {
      type: 'object',
      properties: {
        namePrintedOnPranCard: {
          type: 'string',
          enum: [ 'fatherName', 'motherName' ],
        },
      },
    },
    currentAddress: {
      type: [ 'object', 'null' ],
      properties: {
        addressType: {
          type: [ 'string', 'null' ],
        },
        addressLine1: {
          type: [ 'string', 'null' ],
        },
        districtName: {
          type: [ 'string', 'null' ],
        },
        pincode: {
          type: [ 'string', 'null' ],
        },
        country: {
          type: [ 'string', 'null' ],
        },
        state: {
          type: [ 'object', 'null' ],
          properties: {
            name: {
              type: [ 'string', 'null' ],
            },
          },
        },
      },
    },
    permanentAddress: {
      type: [ 'object', 'null' ],
      properties: {
        addressType: {
          type: [ 'string', 'null' ],
        },
        addressLine1: {
          type: [ 'string', 'null' ],
        },
        districtName: {
          type: [ 'string', 'null' ],
        },
        pincode: {
          type: [ 'string', 'null' ],
        },
        country: {
          type: [ 'string', 'null' ],
        },
        state: {
          type: [ 'object', 'null' ],
          properties: {
            name: {
              type: [ 'string', 'null' ],
            },
          },
        },
      },
    },
    offerId: {
      type: 'string',
      description: 'publicId of the offer associated with the order',
      format: 'uuid',
    },
    isFinalSubmission: {
      type: 'boolean',
    },
    publicId: {
      type: 'string',
      description: 'publicId of the order',
      format: 'uuid',
    },
  },
  required: [ 'userId', 'publicId' ],
  errorMessage: {
    required: {
      userId: 'Parameter: userId is required in the body.',
      publicId: 'Parameter: publicId is required in the body',
    },
    properties: {
      userId: 'Parameter: userId should be valid uuid.',
      publicId: 'Parameter: publicId should be valid uuid.',
    },
  },
  additionalProperties: true,
};

module.exports = patch;
