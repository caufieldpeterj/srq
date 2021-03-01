const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// APP config
const APP = express();
const optionsController = require('./controllers/options.js')

require('dotenv').config()

// PORT
const PORT = process.env.PORT || 3000;

// Database
const databaseName = 'srq';
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/${databaseName}`;


// Database connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Middleware

//tells express to try to match requests with files in the directory called 'public'
APP.use(express.static('public')); 

APP.use(express.urlencoded({extended:true}));
APP.use('/', optionsController);

APP.use(methodOverride('_method'));


// listener
APP.listen(PORT, ()=> {
    console.log('server is up and running on '+ PORT);
});