const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    last_name: {
      type: String,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.generateAuthToken = function () {
  const maxAge = 3 * 24 * 60 * 60;
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.APP_JWT_KEY,
    {
      expiresIn: maxAge,
    },
  );
  return token;
};

userSchema.pre("save", async function (next) {
  // only hash the password if it has been modified (or is new)
  if (this.isModified("password")) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    user.password_text = user.password;
    user.password = await bcrypt.hash(user.password, salt);
  }

  return next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
