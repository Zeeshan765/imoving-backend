const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function authorization(req, res, next) {
  let token = req.header("Authorization");
  if (!token)
    return res.status(400).json({
      success: false,
      message: "Token Not Provided . Your are Not Authenticated",
    });
  try {
    let decoded = jwt.verify(token, process.env.APP_JWT_KEY);
    let user = await User.findById(decoded._id);

    req.user = user;
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }

  next();
}
module.exports = authorization;
