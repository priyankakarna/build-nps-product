/* eslint-disable no-useless-catch */
const MandateService = require('../../services/mandate');
const { cancel: cancelMandateSchema, modify: modifyMandateSchema, generateUrl: generateUrlSchema } = require('../../dto-schemas/mandate');
const Validator = require('../../utils/validator');

const modify = async (_, args) => {
  try {
    const {
      input, publicId, partnerCode = 'PAYU', tenureYears, investedAmount, installmentDate,
    } = args;
    const data = {
      ...input, publicId, partnerCode, tenureYears, investedAmount, installmentDate, methodName: 'modify-mandate',
    };

    const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data, schema: modifyMandateSchema });

    if (validateErrors) {
      return { errors: validateErrors };
    }

    const { errors, doc } = await MandateService.selectPaymentPartner(validData);

    if (doc) {
      return { data: doc };
    }

    return { errors };
  } catch (error) {
    throw error;
  }
};

const cancel = async (_, args) => {
  try {
    const { input, publicId, partnerCode = 'PAYU' } = args;
    const data = {
      ...input, publicId, partnerCode, methodName: 'cancel',
    };

    const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data, schema: cancelMandateSchema });

    if (validateErrors) {
      return { errors: validateErrors };
    }

    const { errors, doc } = await MandateService.selectPaymentPartner(validData);

    if (doc) {
      return { data: doc };
    }

    return { errors };
  } catch (error) {
    throw error;
  }
};

const generateUrl = async (_, args) => {
  try {
    const { orderId, partnerCode = 'PAYU' } = args;

    const data = { orderId, partnerCode, methodName: 'generate-mandate-url' };

    const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data, schema: generateUrlSchema });

    if (validateErrors) {
      return { errors: validateErrors };
    }

    const { errors, doc } = await MandateService.selectPaymentPartner(validData);

    if (doc) {
      return { data: doc };
    }

    return { errors };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Query: {
    NPSMandateLink: generateUrl,
  },
  Mutation: {
    NPSMandateModify: modify,
    NPSMandateCancel: cancel,
  },
};
