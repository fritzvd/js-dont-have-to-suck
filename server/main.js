var restify = require('restify');
var models = require('./models');

function respond(req, res, next) {
	// console.info('user', models.user.get(1));
	models.user.find({where: {username: 'henk'}})
		.complete(function (err, user) {
			console.info(err, user);
		});
	user = models[req.params.table].find({ where: {id: req.params.id}});
	res.send(user);
}

var server = restify.createServer();
server.get('/:table/:id', respond);
server.head('/:table/:id', respond);

server.listen(3000, function () {
	console.info('servertje %s op %s', server.name, server.url);
})