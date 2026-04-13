const express = require("express");
const router = express.Router();
const isAuth = require("../config/auth")
const {
  signup,
  login,
  forgetPassword,
  resetPassword,
  verifyOtp,
  resendOtp,
  getAllUsers,
} = require("../controller/user.controller");

router.post("/signup", signup);
router.post("/login", login);
router.put("/forget-password", forgetPassword);
router.put("/reset-password", resetPassword);
router.put("/verify-otp", verifyOtp);
router.put("/resend-otp", resendOtp);
router.get("/get-all-users", isAuth, getAllUsers);

module.exports = router;
