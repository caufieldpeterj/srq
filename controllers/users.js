const express = require('express');
const ROUTER = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/users.js');

ROUTER.get('/new', (req, res) => {
    res.render('../views/users/new.ejs')
});

ROUTER.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    User.create(req.body, (err, newUser) => {
        console.log('User created: ', newUser);
        res.redirect('/');
    })
})

module.exports = ROUTER;