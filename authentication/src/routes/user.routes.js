const express = require("express");
const router = express.Router();
const { signUp, login, allDetails } = require("../controller/user.controller");

router.post("/sign-up", signUp);
router.post("/login", login);
router.get("/", allDetails);

module.exports = router;
