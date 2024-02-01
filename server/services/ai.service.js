const express = require('express');
const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
});

const messageChatbot = async (req, res) => {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ "role": "user", "content": message }],
        max_tokens: 100
    })
    res.status(200).send({ ai: response.choices[0].message.content })
}

module.exports = { messageChatbot }