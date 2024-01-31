const express = require('express');

const messageChatbot = async (req, res) => {
    const { message } = req.body;
    console.log('User: ', message);
    res.status(200).send({ response: 'chat said Hi' });
}

module.exports = { messageChatbot }