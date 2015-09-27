// server.js

// BASE SETUP
// =====================================

// requiring packages
var express        = require('express');
var app            = express();
var mongoose	   = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// defining port to be used
var port   = process.env.PORT || 8080; 

// defining middleware to use in all requests
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location
app.use(express.static(__dirname + '/public')); 

// configuring body parser
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 


// CONNECTING TO THE DATABASE
// =====================================

var db = require('./config/db');
mongoose.connect(db.url);


// CONFIGURE ROUTES
// =====================================

require('./app/routes')(app); 


// START APP
// =====================================

// starting app at port 8080
app.listen(port);               

// exposing the app
exports = module.exports = app;