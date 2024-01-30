const express = require("express");
const pool = require("../config/db");

const { User } = require("../models/user");
const { Patient } = require("../models/patient");
const { Doctor } = require("../models/doctor");
const { Appointment } = require("../models/appointment");
const { where } = require("sequelize");

// fetch availabilities of doctore
const getAppointments = async (req, res) => {
  const doctor_id = req.query.doctor_id;
  if (!doctor_id) {
    res.status(400).send("Missing parameter");
  } else {
    try {
      const result = await Appointment.findAll({ where: { doctor_id } });
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error retrieving appointments:", error);
      res.status(500).send("Internal Server Error");
    }
  }
};
// booked appointment
const createAppoiment = async (req, res) => {
  const { doctor_id, patient_id, start_time } = req.body;
};
// export
module.exports = { createAppoiment, getAppointments };
