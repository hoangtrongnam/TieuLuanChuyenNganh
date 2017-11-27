const mongoose = require('mongoose');

var LinkSchema = mongoose.Schema;

LinkSchema = new mongoose.Schema({
    link:{type:String}
})

module.exports = mongoose.model('link',LinkSchema);