const express = require('express')
const router = express.Router();

const todoServices = require('../services/testServer.service')

router.get('/', todoServices.getTodos);
router.post('/', todoServices.addTodo);

module.exports = router;