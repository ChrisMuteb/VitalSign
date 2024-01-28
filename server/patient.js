const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const { User } = require('./user');

const Patient = sequelize.define('patient', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    insurance_id: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'patient',
    timestamps: false
});


Patient.sync({ force: false })
    .then(() => {
        console.log('Patient table created');
    })
    .catch(err => {
        console.error('Error creating Patient table:', err);
    });


Patient.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { Patient }
