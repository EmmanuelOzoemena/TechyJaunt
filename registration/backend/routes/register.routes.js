const express = require("express");

const router = express.Router();

const {
  register,
  allDetails,
  uniqueDetail,
  updateDetail,
  deleteDetail
} = require("../controller/register.controller");

router.post("/", register);
router.get("/reg-details", allDetails);
router.get("/reg-details/:id", uniqueDetail);
router.put("/:id", updateDetail);
router.delete("/:id", deleteDetail)

module.exports = router;
