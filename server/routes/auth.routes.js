const express = require('express');
const router = express.Router();
const registerDoctor = require('../services/auth.service').registerDoctor;
const registerPatient = require('../services/auth.service').registerPatient;
const login = require('../services/auth.service').login;
const logOut = require('../services/auth.service').logOut;


router.post('/doctor/Register', registerDoctor);
router.post('/patient/Register', registerPatient);
router.post('/login', login);
router.post('/logout',logOut);



module.exports = router