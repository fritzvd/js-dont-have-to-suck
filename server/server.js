var express = require('express');
var models = require('./models');
var routes = require('./urls');

var app = express();
app.configure(function () {
	app.use(app.router);
	// app.use(express.static(__dirname + '../client'));
	app.all('*', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	  next();
	});
});

function start() {
	routes.setup(app);
	app.listen(3000);
};

start();