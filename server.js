// set up ========================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 
var port  	 = process.env.PORT || 8080; 
var database = require('./config/database');				

// configuration =================
mongoose.connect(database.url); 	// connect to mongoDB database 

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride()); 						// simulate DELETE and PUT
});


// load the routes
require('./app/routes')(app);

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");