var mongoose = require('mongoose');
var schema = mongoose.schema;

var schema = new schema({
	name: {type: String, requred: true, uniqueness: true},
	value: {type: Number, requred:true},
	contract_length: {},
})

modue.exports = mongoose.model('Client', schema);