const Joi = require('joi')
const bcrypt = require('bcrypt')
const { joiValidate, joiError } = require('../../../../utils/joi')
const { CustomError } = require('../../../../utils/error')
const { successResponse } = require('../../../../utils/response')
const { aysncMiddleware } = require('../../../../middleware/async')
const User = require('../../../../models/user')

const login = aysncMiddleware(async (req, res, next) => {
    const { email, password } = req.body

    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })

    const { error } = await joiValidate(schema, {
        email,
        password,
    })

    if (error) {
        throw new CustomError(joiError(error))
    }




    let user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
        throw new CustomError('User not found')
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
        throw new CustomError('Password is incorrect')
    }

    const token = user.generateAuthToken()

    let data = {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token: token,

    }

    return successResponse(res, 'User Logged in Successfully', { user: data })
})

module.exports = login