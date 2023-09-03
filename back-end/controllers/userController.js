const { StatusCodes } = require("http-status-codes");
const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

exports.checkUser = async (req, res, next) => {
  const token = req.body.token;

  console.log("this is the req to check user", req);
  console.log("this is the token to check user", req.body.token);

  if (!token) {
    const error = new Error("unauthenticated error, token does't exist");
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }

  // ** Step 2: If the  token cookie exist from incoming request cookies,
  //     verify whether the JWT is valid and if it is valid, grab the userID and role

  try {
    const { id } = jwt.decode(token);
    console.log("This is the id", id);
    //Attach the userId and role to the req object for later use

    req.user = { userId: id };
    //the same as saying req { user: {userId, role} }
    res.status(StatusCodes.OK).json({ message: "user exist" });
  } catch (err) {
    const error = new Error(
      "unauthenticated error, error while verifying the token"
    );
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }
};

exports.getCurrentUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithOutPassword = user.withOutPassword();
  res.status(StatusCodes.OK).json({ user: userWithOutPassword });
};

exports.updateUser = async (req, res, next) => {
  //since i do not want to allow the user to update his password here i will remove the password from the request body
  const newUser = { ...req.body };
  delete newUser.password;

  //   if (req.file) {
  //upload the image to cloudinary cloud
  // const response = await cloudinary.v2.uploader.upload(req.file.path);
  //delete the image from the file after uploading
  // await fs.unlink(req.file.path);
  // newUser.avatar = response.secure_url;
  // newUser.avatarPublicId = response.public_id;
  //   }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  // if the user update the image, and there is a rev imag delete the previous image from cloud
  //   if (req.file && updateUser.avatarPublicId) {
  //     await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  //   }
  res.status(StatusCodes.OK).json({ message: "user updated" });
};
