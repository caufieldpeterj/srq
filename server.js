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

// import and configure dotenv
require('dotenv').config()

// APP Configuration
const APP = express();
const PORT = process.env.PORT || 3000;

// Database Configuration
const databaseName = 'srq';
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/${databaseName}`;

// controller logic
const optionsController = require('./controllers/options.js');
const sessionsController = require('./controllers/sessions.js');
const usersController = require('./controllers/users.js');

// Middleware
//tells express to try to match requests with files in the directory called 'public'
APP.use(express.static('public')); 
APP.use(methodOverride('_method'));
APP.use(express.urlencoded({extended:true}));
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

// Register our controllers on their routes
APP.use('/srq', optionsController);
APP.use('/sessions', sessionsController);
APP.use('/users', usersController);

// Database connection
// make a connection to the database, this connection will persist
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

APP.get('/', (req, res) => {
    res.redirect('/srq');
})

/*


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