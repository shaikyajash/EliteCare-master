const express = require("express");
const { handleUserSignup, handleUserLogin, handleLogout } = require("../controller/user");
const {
  loginValidator,
  signupValidator,
  validate,
} = require("../utils/validator");
const { verifyToken } = require("../utils/tokenManager");
const router = express.Router();

// Create a new user
router.post("/signup", validate(signupValidator), handleUserSignup);
router.post("/login", validate(loginValidator), handleUserLogin);
router.post("/logout", verifyToken, handleLogout);


module.exports = router;
