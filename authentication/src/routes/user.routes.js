const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  forgetPassword,
  resetPassword,
} = require("../controller/user.controller");

router.post("/signup", signup);
router.post("/login", login);
router.put("/forget-password", forgetPassword);
router.put("/reset-password", resetPassword);

module.exports = router;
