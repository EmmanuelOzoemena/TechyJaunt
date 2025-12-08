const express = require("express");

const router = express.Router();

const {
  register,
  allDetails,
  uniqueDetail,
} = require("../controller/register.controller");

router.post("/", register);
router.get("/reg-details", allDetails);
router.get("/reg-details/:id", uniqueDetail);

module.exports = router;
