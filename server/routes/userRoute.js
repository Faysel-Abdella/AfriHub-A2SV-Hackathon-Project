const express = require("express");

const router = express.Router();

const { getCurrentUser } = require("../controllers/userController");

router.get("/users/current-user", getCurrentUser);

// router.patch(
//   "/api/v1/users/update-user",
//   upload.single("avatar"),
//   validateUpdateUserInput,
//   updateUser
// );

module.exports = router;
