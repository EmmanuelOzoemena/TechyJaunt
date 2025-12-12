const express = require("express");

const router = express.Router();

// const { signUp, login, allDetails } = require("")

router.post("/sign-up", signUp);
router.post("/login", login);
router.get("/", allDetails);

module.export = router;
