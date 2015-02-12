var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var user = require('./lib/models/usersModel')

var app = express();
var port = 8080;
var mongoUri = "mongodb://localhost:27017/clients-user";

mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log('Connected to db at ' + mongoUri);
});

app.use(bodyParser.json());

app.get('/api/users', function (req, res) {
	user.find({}, function(err, docs) {
		if (!err) {
			if (docs.length === 0) {
				res.status(404).send('No documents found')
			} else {
			res.status(200).json(docs);
			}
		} else {
			res.status(500).json(err);
		}
	})
})

app.post('/api/users', function (req, res) {
	console.log('req.body');
	user.create(req.body).then(function(response) {
		res.status(200).json(response);
	}, 
	function (err) {
		res.status(500).json(err);
	})

	//Other option other than create: 

	// var user = new user(req.body);
	// user.save(function(err, response) {
	// 	if (!err) {
	// 		res.status(200).json(user);
	// 	} else {
	// 		res.status(500).json(err);
	// 	}
	// })

});



app.listen(port, function() {
	console.log('Now listening on port ' + port);
})