const { RSA_NO_PADDING } = require('constants');
const express = require('express');

const PORT = 3000;
const APP = express();


// Routes

// index
APP.get('/', (req, res) => {
    res.render('index.ejs')
});

// new
APP.get('/new', (req, res) => {
    res.render('new.ejs')
})

// listener
APP.listen(PORT, ()=> {
    console.log('server is up and running');
});