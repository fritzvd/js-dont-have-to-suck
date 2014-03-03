var restify = require('restify');
var models = require('./models');

function respond(req, res, next) {
	var user;
	models[req.params.table].find(req.params.id)
		.complete(function (err, user) {
			var result = '';
			user = user;
			user.getBills().success(function (bills) {
				user.values.bills = bills;
				// console.info(user.values, bills);
				res.send(user);
			});
		});
}

function respondList (req, res, next) {
	var list;
	models[req.params.table].findAll()
		.success(function (list) {
			list = list;
			res.send(list);
		});
}

function insert (req, res, next) {
	// assert.ifError(err);
	console.info(req)
	models[req.params.table].define();
	res.send(201, 'Dank U');
}

var server = restify.createServer();
server.get('/:table/', respondList);

server.get('/:table/:id', respond);
server.head('/:table/:id', respond);
server.post('/:table/create', insert);

server.listen(3000, function () {
	console.info('servertje %s op %s', server.name, server.url);
})