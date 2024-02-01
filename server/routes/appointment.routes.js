const express = require("express");
const router = express.Router();
const appointmentService = require("../services/appointment.service");

router.get("/doctor", appointmentService.getAppointments);
router.get("/", appointmentService.getUserAppointments);
router.post("/", appointmentService.createAppointment);

module.exports = router;
