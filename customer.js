/* eslint-disable no-useless-catch */
const { Customer: CustomerService } = require('../../services');
const { getByUserId: getByUserIdSchema, getGstDetails: getGstDetailsSchema, kyc: kycSchema } = require('../../dto-schemas');
const Validator = require('../../utils/validator');
const Helper = require('../../utils/helper');

const checkDuplicate = async (_, args, context) => {
  try {
    const { auth: { userId }, headers: { auhorization } } = context;
    const { ecres } = args;

    const { errors: profileErrors, data: profileData } = await Helper.kyc({ ecres });

    if (profileErrors) {
      return { errors: profileErrors };
    }

    const { profile, userId: kycUserId } = profileData;

    if (userId !== kycUserId) {
      return { errors: [ { name: 'ecres', message: 'invalid user' } ] };
    }

    const data = { userId, profile };

    const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data, schema: kycSchema });

    if (validateErrors) {
      return { errors: validateErrors };
    }

    const { errors, doc } = await CustomerService.checkDuplicate(validData, auhorization);

    if (doc) {
      return { data: doc };
    }

    return { errors };
  } catch (error) {
    throw error;
  }
};

const accountStatus = async (_, args, context) => {
  try {
    const { auth: { userId } } = context;

    const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: { userId }, schema: getByUserIdSchema });

    if (validateErrors) {
      return { errors: validateErrors };
    }

    const { errors, doc } = await CustomerService.accountStatus(validData);

    if (doc) {
      return { data: doc };
    }

    return { errors };
  } catch (error) {
    throw error;
  }
};

const getGSTDetails = async (_, args, context) => {
  try {
    const { auth: { userId } } = context;
    const { amount, orderId, investmentType } = args;
    const data = {
      amount, orderId, investmentType, userId,
    };

    const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data, schema: getGstDetailsSchema });

    if (validateErrors) {
      return { errors: validateErrors };
    }

    const { errors, doc } = await CustomerService.getGSTDetails(validData);

    if (doc) {
      return { data: doc };
    }

    return { errors };
  } catch (error) {
    throw error;
  }
};

const getPortfolio = async (_, args, context) => {
  try {
    const { auth: { userId } } = context;

    const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: { userId }, schema: getByUserIdSchema });

    if (validateErrors) {
      return { errors: validateErrors };
    }

    const { errors, doc } = await CustomerService.getPortfolio(validData);

    if (doc) {
      return { data: doc };
    }

    return { errors };
  } catch (error) {
    throw error;
  }
};

const get = async (_, args, context) => {
  try {
    const { auth: { userId } } = context;

    const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: { userId }, schema: getByUserIdSchema });

    if (validateErrors) {
      return { errors: validateErrors };
    }

    const { doc } = await CustomerService.get(validData);

    return { data: doc };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Query: {
    NPSCheckDuplicate: checkDuplicate,
    NPSAccountStatus: accountStatus,
    NPSGetGSTDetails: getGSTDetails,
    NPSPortfolio: getPortfolio,
    NPSCustomer: get,
  },
};
