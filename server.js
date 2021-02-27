const express = require('express');
const mongoose = require('mongoose');
const APP = express();
const PORT = 3000;

// Middleware
APP.use(express.urlencoded({extended:true}));

// Database connection
mongoose.connect('mongodb://localhost:27017/srq', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const Options = require('./models/options.js');

// const manyOptions = [
//     {   
//         Name: 'Kayaking',
//         Description: 'Friends, I have been navel-gazing',
//     },
//     {
//         Name: 'Seashells',
//         Description: 'starfish and sandollars',
//     },
//     {
//         Name: 'Golfing',
//         Description: 'Below par',
//     },
//     {
//         Name: 'Circus',
//         Description: 'Animal-friendly',
//     },
// ];

// Options.insertMany(manyOptions, (error, options) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(options);
//     }
// })

// Routes

// seed
APP.get('/srq/seed/', (req, res)=> {
    Options.create([
        {   
            Name: 'Kayaking',
            Description: 'Friends, I have been navel-gazing',
        },
        {
            Name: 'Seashells',
            Description: 'starfish and sandollars',
        },
        {
            Name: 'Golfing',
            Description: 'Below par',
        },
        {
            Name: 'Circus',
            Description: 'Animal-friendly',
        }
    ], (err, data) => {
        res.redirect('/srq');
    })
});

// index
APP.get('/srq/', (req, res) => {
    Options.find({}, (error, allOptions) => {
        res.render('index.ejs', {
            options: allOptions
        })
    });
});

// new
APP.get('/srq/new/', (req, res) => {
    res.render('new.ejs');
});

// create
APP.post('/srq/', (req, res) => {
    Options.create(req.body, (error, createdOption) => {
        console.log(createdOption);
        res.redirect('/srq/');
    });
});

// show
APP.get('/srq/:id', (req, res) => {
    Options.findById(req.params.id, (err, foundOption) => {
        // res.send(foundOption);
        console.log(foundOption);
        res.render('show.ejs', {
            option: foundOption
        });
    });
});

// listener
APP.listen(PORT, ()=> {
    console.log('server is up and running');
});