var models = require('./models');

models.user.create({
	username: 'henk',
	password: 'i-am-henk'
}).complete(function (err, user) {
	console.info(err, user);
});