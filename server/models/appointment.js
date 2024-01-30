const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Doctor = require("./doctor");
const Patient = require("./patient");

const Appointment = sequelize.define(
  "appointment",
  {
    appointment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    doctor_id: {
      type: DataTypes.INTEGER,
    },
    patient_id: {
      type: DataTypes.INTEGER,
    },
    start_time: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "appointment",
    timestamps: false,
  }
);

Appointment.sync({ force: false })
  .then(() => {
    console.log("Appointment table created (if not exist)");
  })
  .catch((err) => {
    console.error("Error creating appointment table", err);
  });

//Appointment.belongsTo(Doctor, { foreignKey: "user_id" });
//Appointment.belongsTo(Patient, { foreignKey: "user_id" });
module.exports = { Appointment };
