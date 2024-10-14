const Joi = require('joi')
const { joiValidate, joiError } = require('../../../../../utils/joi')
const { successResponse } = require('../../../../../utils/response')
const { CustomError } = require('../../../../../utils/error')
const { aysncMiddleware } = require('../../../../../middleware/async')
const User = require('../../../../../models/user')


const destroy = aysncMiddleware(async (req, res, next) => {

  const { _id } = req.params

  const schema = Joi.object({
    _id: Joi.string().hex().length(24).required(),
  })

  const { error } = await joiValidate(schema, {
    _id,
  })

  if (error) {
    throw new CustomError(joiError(error))
  }

  await User.deleteOne({ _id })

  return successResponse(res, 'User Deleted Successfully')
})

module.exports = destroy