const Joi = require("joi");
const bcrypt = require("bcrypt");
const { joiValidate, joiError } = require("../../../../../utils/joi");
const { CustomError } = require("../../../../../utils/error");
const { successResponse } = require("../../../../../utils/response");
const { aysncMiddleware } = require("../../../../../middleware/async");
const User = require('../../../../../models/user');

const login = aysncMiddleware(async (req, res, next) => {
  const { email, password } = req.body;

  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const { error } = await joiValidate(schema, {
    email,
    password,
  });

  if (error) {
    throw new CustomError(joiError(error));
  }

  let admin = await User.findOne({ email: email.toLowerCase(), role: "admin" });
  if (!admin) {
    throw new CustomError("Admin not found");
  }

  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) {
    throw new CustomError("Password is incorrect");
  }

  const token = admin.generateAuthToken();

  let data = {
    _id: admin._id,
    first_name: admin.first_name,
    last_name: admin.last_name,
    email: admin.email,
    token: token,
  };

  return successResponse(res, "Admin Logged in Successfully", { admin: data });
});

module.exports = login;
