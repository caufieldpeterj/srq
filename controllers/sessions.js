const express = require('express');
const ROUTER = express.Router();

ROUTER.get('/create', (req,res) => {
    req.session.anyProperty = 'any value';
    res.redirect('/');
});

ROUTER.get('/retrieve', (req,res) => {
    if (req.session.anyProperty === "some value") {
        console.log('session properties match');
    } else {
        console.log('session properties DO NOT match');
    }
    res.redirect('/');
});

ROUTER.get('/update', (req,res) => {
    req.session.anyProperty = 'some value';
    res.redirect('/');
});

ROUTER.get('/destroy', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('we could not destroy the session');
        } else {
            console.log('destroyed the session');
        }
    })
    res.redirect('/');
});

module.exports = ROUTER;