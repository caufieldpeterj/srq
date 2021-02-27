const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true}
});

const Options = mongoose.model('Options', optionSchema);

module.exports = Options;