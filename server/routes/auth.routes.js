const express = require('express');
const router = express.Router();
const authServices = require("../services/auth.service");


router.post('/doctor/register', authServices.registerDoctor);
router.post('/patient/register', authServices.registerPatient);
router.post('/login', authServices.login);
router.post('/logout', authServices.logout);



module.exports = router