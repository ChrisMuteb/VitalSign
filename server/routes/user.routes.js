const express = require("express");
const router = express.Router();
const userServices = require("../services/user.service");

router.get("/patient", userServices.getPatient);
router.get("/doctor", userServices.getDoctor);
router.get("/search/doctor", userServices.getDoctors);

module.exports = router;
