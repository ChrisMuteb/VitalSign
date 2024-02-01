const express = require("express");
const pool = require("../config/db");
const { User } = require("../models/user");
const { Doctor } = require("../models/doctor");
const { Sequelize, Op } = require("sequelize");

const getDoctor = async (req, res) => {
  const user_id = req.query.user_id;
  if (!user_id) {
    res.status(400).send("Missing parameter");
  } else {
    try {
      const user = await User.findOne({
        where: { user_id: user_id },
      });
      const doctor = await Doctor.findOne({
        where: { user_id: user_id },
      });
      const result = {
        user_id: user.user_id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        speciality: doctor.speciality,
      };
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error retrieving user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
};

const getPatient = async (req, res) => {
  const user_id = req.query.user_id;
  if (!user_id) {
    res.status(400).send("Missing parameter");
  } else {
    try {
      const result = await User.findOne({
        attributes: ["user_id", "firstname", "lastname", "role", "dob"],
        where: { user_id: user_id },
      });
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error retrieving user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
};

const getDoctors = async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    res.status(400).send("Missing parameter");
  } else {
    try {
      const doctors = await Doctor.findAll({
        where: {
          speciality: {
            [Op.substring]: keyword,
          },
        },
      });
      let result = [];
      await doctors.map(async (doctor) => {
        const user = await User.findOne({
          where: { user_id: doctor.user_id },
        });
        const item = {
          user_id: doctor.user_id,
          name: `${user.firstname} ${user.lastname}`,
          speciality: doctor.speciality,
          telephone: doctor.telephone,
        };
        result.push(item);
        console.log(result);
      });
      const sleep = (milliseconds) =>
        new Promise((resolve) => setTimeout(resolve, milliseconds));
      await sleep(1000);
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error retrieving doctor", error);
      res.status(500).send("Internal Server Error");
    }
  }
};
// export
module.exports = { getDoctor, getDoctors, getPatient };
