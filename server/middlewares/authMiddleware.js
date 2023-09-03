const { StatusCodes } = require("http-status-codes");
const { verifyJWT } = require("../utils/tokenUtil");

exports.authenticateUser = (req, res, next) => {
  // ** Step 1: Check if token cookie exist from incoming request cookies,
  //    if it does't exist response unauthenticated error

  //Since you install the cookie-parser package, you can access the cookie form incoming request, just
  //by saying req.cookie

  const { token } = req.body.token;
  if (!token) {
    const error = new Error("unauthenticated error, token does't exist");
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }

  // ** Step 2: If the  token cookie exist from incoming request cookies,
  //     verify whether the JWT is valid and if it is valid, grab the userID and role

  try {
    const { id } = verifyJWT(token);
    //Attach the userId and role to the req object for later use

    const userId = id;

    req.user = { userId: userId };
    //the same as saying req { user: {userId, role} }
    console.log(req.user);
    next();
  } catch (err) {
    const error = new Error("unauthenticated error");
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }
};

// export const checkIfAdmin = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     const error = new Error("unauthenticated error");
//     error.statusCode = StatusCodes.UNAUTHORIZED;
//     throw error;
//   }
//   next();
// };
