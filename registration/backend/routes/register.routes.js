const express = require("express");

const router = express.Router();

const {
  register,
  allDetails,
  uniqueDetail,
} = require("../controller/register.controller");

router.post("/api/register", register);
router.get("/api/reg-details", allDetails);
router.get("/api/reg-details/:id", uniqueDetail);

module.exports = router;
