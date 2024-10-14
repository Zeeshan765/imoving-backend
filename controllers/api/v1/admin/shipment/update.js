const Joi = require("joi");
const { joiValidate, joiError } = require("../../../../../utils/joi");
const { CustomError } = require("../../../../../utils/error");
const { aysncMiddleware } = require('../../../../../middleware/async');
const { successResponse } = require('../../../../../utils/response');
const Shipment = require('../../../../../models/shipment');

const update = aysncMiddleware(async (req, res, next) => {

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

   // Update the shipment in the database
   const user = await Shipment.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
   .lean()
   .exec();

  return successResponse(res, "Shipment Updated Successfully", {
    user,
  });
});

module.exports = update;
