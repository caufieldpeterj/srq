// create a model to interact with the database through schema

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true},
    Date: {type: Date, required: true, default: Date.now}
});

const Options = mongoose.model('Options', optionSchema);

module.exports = Options;