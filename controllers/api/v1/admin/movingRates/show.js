const Joi = require("joi");
const { joiValidate, joiError } = require("../../../../../utils/joi");
const { CustomError } = require("../../../../../utils/error");
const { aysncMiddleware } = require('../../../../../middleware/async');
const { successResponse } = require('../../../../../utils/response');
const Moving = require('../../../../../models/moving');

const show = aysncMiddleware(async (req, res, next) => {

  const { _id } = req.params;

  const schema = Joi.object({
    _id: Joi.string().hex().length(24).required(),
  });

  const { error } = await joiValidate(schema, {
    _id,
  });

  if (error) {
    throw new CustomError(joiError(error));
  }

  const user = await Moving.findOne({
      _id,
    })
    .lean()
    .exec();

  return successResponse(res, "Moving found Successfully", {
    user,
  });
});

module.exports = show;