const express = require("express");
const pool = require("../config/db");

const { User } = require("../models/user");
const { Patient } = require("../models/patient");
const { Doctor } = require("../models/doctor");
const { Appointment } = require("../models/appointment");

// fetch availabilities of doctore
const createAppoiment = async (req, res) => {
  const { doctor_id, patient_id, start_time } = req.body;
};
const getAppointments = async (req, res) => {};
// booked appointment

// export
