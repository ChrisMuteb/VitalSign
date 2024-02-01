const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { User } = require("./user");

const Doctor = sequelize.define(
  "doctor",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    speciality: {
      type: DataTypes.STRING,
    },
    codepostal: {
      type: DataTypes.STRING,
    },
    telephone: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "doctor",
    timestamps: false,
  }
);

Doctor.sync({ force: false })
  .then(() => {
    console.log("Doctor table created (if not exist)");
  })
  .catch((err) => {
    console.error("Error creating Doctor table:", err);
  });

Doctor.belongsTo(User, { foreignKey: "user_id" });

module.exports = { Doctor };
