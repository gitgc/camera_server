var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    date: { type: Date, default: Date.now },
    images: [{ name: String, path: String, date: Date }]
});

module.exports = mongoose.model('Event', eventSchema);
