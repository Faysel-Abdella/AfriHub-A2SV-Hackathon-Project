const { StatusCodes } = require("http-status-codes");

const bcrypt = require("bcryptjs");

const User = require("../models/userModel");

const { createJWT } = require("../utils/tokenUtil");

// const { hashPassword } = require("../utils/hashPassword");

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const fullName = req.body.fullName;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
    fullName,
  });

  await user.save();

  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ message: "User created", token: token });
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = StatusCodes.BAD_REQUEST;

      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      const error = new Error("Incorrect password");
      error.statusCode = StatusCodes.UNAUTHORIZED;
      throw error;
    }

    const token = user.createJWT();

    res
      .status(StatusCodes.OK)
      .json({ message: "user logged in", token: token });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.logout = (req, res) => {
  //i will set a d/t value for the cookie of the same name the user logged in
  res.cookie("token", "logout", {
    //and make this to be expires now
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ message: "user logged out" });
};
