var models = require('./models');

models.user.create({
	id: 3,
	username: 'pietje',
	password: 'i-am-piet'
}).complete(function (err, user) {
	console.info(err, user);
});

models.user.create({
	id: 1,
	username: 'henk',
	password: 'i-am-henk'
}).complete(function (err, user) {
	console.info(err, user);
});