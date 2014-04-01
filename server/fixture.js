var models = require('./models');

var pietje, henk, firstbill;
models.client.create({
	id: 3,
	name: 'pietje',
	password: 'i-am-piet'
}).complete(function (err, client) {
	pietje = client;
	var firstbill = models.bill.create({
	id: 1,
	timestamp: Date.now(),
	title: 'REST API',
	price: 30.00,
	payed: false
	}).complete(function (err, bill) {
		console.info(pietje, bill)
		pietje.setBills([bill])
	});
	// console.info(err, client);
});

models.client.create({
	id: 1,
	name: 'henk',
	password: 'i-am-henk'
}).complete(function (err, client) {
	henk = client
	// console.info(err, client);
});



