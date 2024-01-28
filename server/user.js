const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.STRING
    },
    profile_image_url: {
        type: DataTypes.STRING
    }
}, {
  tableName: 'user',
  timestamps: false
});

User.sync({ force: false })
    .then(() => {
        console.log('User table created');
    })
    .catch(err => {
        console.error('Error creating User table:', err);
    });

module.exports = { User };
