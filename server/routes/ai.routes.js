const express = require('express');
const router = express.Router();
const aiService = require('../services/ai.service');

router.post('/chatbot', aiService.messageChatbot);


module.exports = router