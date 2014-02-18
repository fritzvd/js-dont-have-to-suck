var restify = require('restify');
// var models = require('./models');

function respond(req, res, next) {
	res.send('hello ' + req.params.name);
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000, function () {
	console.info('servertje %s op %s', server.name, server.url);
})