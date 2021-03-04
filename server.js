// npm i express
const express = require('express');
// npm i mongoose
const mongoose = require('mongoose');
// npm i method-override
const methodOverride = require('method-override');
// npm i express-session - requires express-session in teh server
const session = require('express-session');
// npm i bcrypt
const bcrypt = require('bcrypt')
const optionsController = require('./controllers/options.js')

const databaseName = 'srq';

// import and configure dotenv
require('dotenv').config()

// APP Configuration
const APP = express();
const PORT = process.env.PORT || 3000;
// Database
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/${databaseName}`;

// Database connection
// make a connection to the database, this connection will persist
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Middleware

//tells express to try to match requests with files in the directory called 'public'
APP.use(express.static('public')); 
APP.use(methodOverride('_method'));
APP.use(express.urlencoded({extended:true}));
APP.use('/srq', optionsController);
APP.use(
    session({
        // how the server will talk to the front end and make sure everything that is happening is secure
        secret: process.env.SECRET,
        //  forcing a rewrite of the sesion if nothing changes - false
        resave: false,
        // review
        saveUninitialized: false
    })
);


APP.get('/', (req, res) => {
    res.redirect('/srq');
})

/*
APP.get('/create-session', (req,res) => {
    req.session.anyProperty = 'any value';
    res.redirect('/');
})

APP.get('/retrieve-session', (req,res) => {
    if (req.session.anyProperty === "some value") {
        console.log('session properties match');
    } else {
        console.log('session properties DO NOT match');
    }
    res.redirect('/');
})

APP.get('/update-session', (req,res) => {
    req.session.anyProperty = 'some value';
    res.redirect('/');
});

APP.get('/destroy-session', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('we could not destroy the session');
        } else {
            console.log('destroyed the session');
        }
    })
})

// stored in the DB
const hashedPassword = bcrypt.hashSync('password1234' , bcrypt.genSaltSync(10));
// generated from a password form
const hashedPasswordGuess = bcrypt.hashSync('password1234' , bcrypt.genSaltSync(10));
// How to make sure a user can login
bcrypt.compareSync(hashedPasswordGuess, hashedPassword);
*/

// listener
APP.listen(PORT, ()=> {
    console.log('server is up and running on '+ PORT);
});