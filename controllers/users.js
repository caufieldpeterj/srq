const express = require('express');
const ROUTER = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/users.js');

ROUTER.get('/', (req, res) => {
    res.send('welcome to users');
})

module.exports = ROUTER;