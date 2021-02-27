const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const optionsController = require('./controllers/options.js')

const APP = express();
const PORT = 3000;
const databaseName = 'srq';

// Database connection
mongoose.connect(`mongodb://localhost:27017/${databaseName}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Middleware
APP.use(express.urlencoded({extended:true}));
APP.use(methodOverride('_method'));
APP.use('/', optionsController);

// listener
APP.listen(PORT, ()=> {
    console.log('server is up and running');
});