


const Joi = require('joi')
const { joiValidate, joiError } = require('../../../../utils/joi')
const { aysncMiddleware } = require('../../../../middleware/async')
const { successResponse } = require('../../../../utils/response')
const { CustomError } = require('../../../../utils/error')
const User = require('../../../../models/user')


const register = aysncMiddleware(async (req, res, next) => {

    const { first_name, last_name, email, password } = req.body

    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })

    const { error } = await joiValidate(schema, {
        first_name, last_name, email, password
    })

    if (error) {
        throw new CustomError(joiError(error))
    }


    let user = await User.findOne({ email: email.toLowerCase() })

    if (user) {
        throw new CustomError('User already exists')
    }

    user = new User({
        first_name, last_name, email, password
    })
    await user.save()

    const token = user.generateAuthToken()

    let data = {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token: token,

    }
    return successResponse(res, 'User Registered Successfully', { user: data })

})




module.exports = register