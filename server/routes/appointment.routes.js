const express = require("express");
const router = express.Router();
const appointmentService = require("../services/appointment.service");

router.get("/", appointmentService.getAppointments);
router.post("/", appointmentService.createAppoiment);

module.exports = router;
