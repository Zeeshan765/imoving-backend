const Joi = require('joi')
const { joiValidate, joiError } = require('../../../../../utils/joi')
const { successResponse } = require('../../../../../utils/response')
const { CustomError } = require('../../../../../utils/error')
const { aysncMiddleware } = require('../../../../../middleware/async')
const Moving = require('../../../../../models/moving')


const destroy = aysncMiddleware(async (req, res, next) => {

  const { id } = req.params

  const schema = Joi.object({
    id: Joi.string().hex().length(24).required(),
  })

  const { error } = await joiValidate(schema, {
    id,
  })

  if (error) {
    throw new CustomError(joiError(error))
  }

  await Moving.deleteOne({ _id:id })

  return successResponse(res, 'Moving rates Deleted Successfully')
})

module.exports = destroy