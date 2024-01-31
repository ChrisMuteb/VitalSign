const express = require("express");
const pool = require("../config/db");

const { User } = require("../models/user");
const { Patient } = require("../models/patient");
const { Doctor } = require("../models/doctor");
const { Appointment } = require("../models/appointment");
const { where, Op } = require("sequelize");

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
const getUserAppointments = async (req, res) => {
  console.log(req);
  const user_id = req.query.user_id;
  if (!user_id) {
    res.status(400).send("Missing parameter");
  } else {
    try {
      const result = await Appointment.findAll({
        where: {
          [Op.or]: [{ doctor_id: user_id }, { patient_id: user_id }],
        },
      });
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error retrieving appointments:", error);
      res.status(500).send("Internal Server Error");
    }
  }
};
// booked appointment
const createAppointment = async (req, res) => {
  const { doctor_id, patient_id, start_time, symptom } = req.body;
  console.log("req body", req.body);

  try {
    const appointment = await Appointment.create({
      doctor_id,
      patient_id,
      start_time,
      symptom,
    });
    console.log("appointment", appointment);
    res
      .status(201)
      .send({ message: "Appointment created successfully", appointment });
  } catch (err) {
    console.error("Error creating Appointment:", err);
    res.status(500).send("Internal Server Error For Appointment");
  }
};
// export
module.exports = { createAppointment, getAppointments, getUserAppointments };
