const Joi = require("joi");
const { joiValidate, joiError } = require("../../../../../utils/joi");
const { CustomError } = require("../../../../../utils/error");
const { aysncMiddleware } = require('../../../../../middleware/async');
const { successResponse } = require('../../../../../utils/response');
const User = require('../../../../../models/user');

const sendPromotion = aysncMiddleware(async (req, res, next) => {

  

  return successResponse(res, "Promotion Sent Successfully");
});

module.exports = sendPromotion;
