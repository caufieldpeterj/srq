const express = require('express');
const ROUTER = express.Router();
const Options = require('../models/options.js')

// Routes
// seed
ROUTER.get('/srq/seed/', (req, res)=> {
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
ROUTER.get('/srq/', (req, res) => {
    Options.find({}, (error, allOptions) => {
        res.render('index.ejs', {
            options: allOptions
        })
    });
});

// new
ROUTER.get('/srq/new/', (req, res) => {
    res.render('new.ejs');
});

// create
ROUTER.post('/srq/', (req, res) => {
    Options.create(req.body, (error, createdOption) => {
        console.log(createdOption);
        res.redirect('/srq/');
    });
});

// show
ROUTER.get('/srq/:id', (req, res) => {
    Options.findById(req.params.id, (err, foundOption) => {
        // res.send(foundOption);
        console.log(foundOption);
        res.render('show.ejs', {
            option: foundOption
        });
    });
});

// delete
ROUTER.delete('/srq/:id', (req, res) => {
    Options.findByIdAndRemove(req.params.id, (error, deletedOption) => {
        console.log(deletedOption);
        res.redirect('/srq');
    });
});

// edit - get existing form data
ROUTER.get('/srq/:id/edit', (req, res) => {
    Options.findById(req.params.id, (err, foundOption) => {
        res.render('edit.ejs', {
            option: foundOption
        });
    })
})

// update - PUT edited form data
ROUTER.put('/srq/:id', (req, res) => {
    // param 1 = id of the fruit we are going to update
    // param 2 = the contents of the update going to the database
    // param 3 = make sure mongoose sends us back the changed record
    // parma 4 = the callback to execute after the database is updated
    
    Options.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedOptions) => {
        res.redirect('/srq');
    })
})

module.exports = ROUTER;