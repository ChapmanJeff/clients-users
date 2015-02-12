var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, requred: true, index: true},
	email: {type: String, uniqueness: true},
	address:[{
			street: 	{type: String, required: true, uppercase: true},
			city: 		{type: String, required: true, uppercase: true},
			state: 		{type: String, required: true, uppercase: true},
			zip: 			{type: String, required: true},
			kind: 		{type: String, enum: ['Billing', 'Shipping', 'Both'], 
									default: 'Both'}
		}], 
	age: {type: Number, required: true, min: 13}
})

module.exports = mongoose.model('User', schema);