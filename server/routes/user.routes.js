const express = require("express");
const router = express.Router();
const userServices = require("../services/user.service");

router.get("/", userServices.getUser);
router.get("/search/doctor", userServices.getDoctors);

module.exports = router;
