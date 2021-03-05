const express = require('express');
const isAuthenticated = require('../services.js');
const ROUTER = express.Router();
const Options = require('../models/options.js')

ROUTER.use(isAuthenticated);

// Routes
// seed
ROUTER.get('/seed/', (req, res)=> {
    Options.create([
        {   
            Name: 'Kayaking',
            Description: 'Let\'s paddle',
            Date: null,
        },
        {
            Name: 'Seashells',
            Description: 'starfish and sandollars',
            Date: null,
        },
        {
            Name: 'Golfing',
            Description: 'Below par',
            Date: null,
        },
        {
            Name: 'Circus',
            Description: 'Animal-friendly',
            Date: null,
        }
    ], (err, data) => {
        res.redirect('/srq');
    })
});

// index
ROUTER.get('/', (req, res) => {
    // console.log(req.session);
    Options.find({}, (error, allOptions) => {
        res.render('index.ejs', {
            options: allOptions
        })
    });
});

// new
ROUTER.get('/new/', (req, res) => {
    res.render('new.ejs');
});

// create
ROUTER.post('/', (req, res) => {
    Options.create(req.body, (error, createdOption) => {
        console.log(createdOption);
        res.redirect('/srq/');
    });
});

// show
ROUTER.get('/:id', (req, res) => {
    Options.findById(req.params.id, (err, foundOption) => {
        // res.send(foundOption);
        console.log(foundOption);
        res.render('show.ejs', {
            option: foundOption
        });
    });
});

// delete
ROUTER.delete('/:id', (req, res) => {
    Options.findByIdAndRemove(req.params.id, (error, deletedOption) => {
        console.log(deletedOption);
        res.redirect('/srq');
    });
});

// edit - get existing form data
ROUTER.get('/:id/edit', (req, res) => {
    Options.findById(req.params.id, (err, foundOption) => {
        res.render('edit.ejs', {
            option: foundOption
        });
    })
})

// update - PUT edited form data
ROUTER.put('/:id', (req, res) => {
    // param 1 = id of the fruit we are going to update
    // param 2 = the contents of the update going to the database
    // param 3 = make sure mongoose sends us back the changed record
    // parma 4 = the callback to execute after the database is updated
    
    Options.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedOptions) => {
        res.redirect('/srq');
    })
})

module.exports = ROUTER;