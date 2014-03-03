var models = require('./models');

var pietje, henk, firstbill;
models.user.create({
	id: 3,
	username: 'pietje',
	password: 'i-am-piet'
}).complete(function (err, user) {
	pietje = user;
	var firstbill = models.bill.create({
	id: 1,
	timestamp: Date.now(),
	price: 30.00
	}).complete(function (err, bill) {
		console.info(pietje, bill)
		pietje.setBills([bill])
	});
	// console.info(err, user);
});

models.user.create({
	id: 1,
	username: 'henk',
	password: 'i-am-henk'
}).complete(function (err, user) {
	henk = user
	// console.info(err, user);
});



