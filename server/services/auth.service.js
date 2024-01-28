const express = require('express');
const router = express.Router();
const { User } = require('../user');
const { Doctor } = require('../doctor');
const { Patient } = require('../patient');
const bcrypt = require('bcryptjs');

const registerDoctor = async (req, res) => {
    const { email, password, firstname, lastname, dob, role, profile_image_url, speciality } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            password:hashedPassword,
            firstname,
            lastname,
            role: role.charAt(0).toUpperCase() + role.slice(1).toLowerCase(),
            dob,
            profile_image_url
        });
        console.log("Here is user: ", user)
        
        const doctor = await Doctor.create({ user_id: user.user_id, speciality:speciality });
        res.status(201).send({ message: 'Doctor created successfully', user });
    } catch (error) {
        console.error('Error creating Doctor:', error);
        res.status(500).send('Internal Server Error For Doctor');
    }
};

const registerPatient = async (req, res) => {
    const { email, password, firstname, lastname, dob, role, profile_image_url, insurance_id } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            password: hashedPassword,
            firstname,
            lastname,
            role: role.charAt(0).toUpperCase() + role.slice(1).toLowerCase(),
            dob,
            profile_image_url
        });

        const patient = await Patient.create({ user_id: user.user_id, insurance_id });
        res.status(201).send({ message: 'Patient created successfully', user });
    } catch (error) {
        console.error('Error creating Patient:', error);
        res.status(500).send('Internal Server Error For Patient');
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send('User not found');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            res.send({ message: 'Login successful', user });
        } else {
            res.status(401).send('Incorrect password');
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).send('Internal Server Error');
    }
};

const logOut = (req, res) => {
    res.status(200).send('Logged out successfully');
};

module.exports = { registerDoctor, registerPatient, login, logOut };
