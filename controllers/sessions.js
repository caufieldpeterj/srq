const express = require('express');
const ROUTER = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/users.js');

ROUTER.get('/new', (req,res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    });
});

ROUTER.post('/', (req, res) => {
    console.log(req.session);
    
    User.findOne({ username: req.body.username}, (err, foundUser) => {
        if (err) {
            console.log(err);
            res.send('Sorry something went wrong in our database');
        } else if (!foundUser) {
            res.send('<a href="/users/new">Sorry no user found</a>')
        } else {
            // we have a valid user, time to compare passwords
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;

                res.redirect('/srq');
            } else {
                // no matching passwords, send back to login page
                res.send('<a href="/sessions/new">Sorry passwords didn\'t match</a>')
            }
        }
    })
});

ROUTER.delete('/', (req, res) => {
    // when we remove the session, redirect them to the login screen
    req.session.destroy(() => {
        res.redirect('/sessions/new');
    })
})

/*
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
// stored in the DB
const hashedPassword = bcrypt.hashSync('password1234' , bcrypt.genSaltSync(10));
// generated from a password form
const hashedPasswordGuess = bcrypt.hashSync('password1234' , bcrypt.genSaltSync(10));
// How to make sure a user can login
bcrypt.compareSync(hashedPasswordGuess, hashedPassword);
*/

module.exports = ROUTER;