var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true
    }
},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);