var models = require('./models');

var pietje, henk, firstbill;
models.client.create({
	name: 'pietje',
	password: 'i-am-piet'
}).complete(function (err, client) {
	pietje = client;
	var firstbill = models.bill.create({
	timestamp: new Date("2013-04-01T17:05:30.336Z"),
	title: 'REST API',
	price: 30.00,
	paid: false
	}).complete(function (err, bill) {
		console.info(pietje, bill)
		pietje.setBills([bill])
	});
	var secbill = models.bill.create({
	timestamp: new Date("2013-12-01T17:05:30.336Z"),
	title: 'Client',
	price: 60.00,
	paid: false
	}).complete(function (err, bill) {
		console.info(pietje, bill)
		pietje.setBills([bill])
	});
	var firstbill = models.bill.create({
	timestamp: new Date("2013-04-01T17:05:30.336Z"),
	title: 'Dingen',
	price: 30.00,
	paid: false
	}).complete(function (err, bill) {
		console.info(pietje, bill)
		pietje.setBills([bill])
	});
	var secbill = models.bill.create({
	timestamp: new Date("2013-12-01T17:05:30.336Z"),
	title: 'More things',
	price: 60.00,
	paid: false
	}).complete(function (err, bill) {
		console.info(pietje, bill)
		pietje.setBills([bill])
	});
	// console.info(err, client);
});

models.client.create({
	name: 'henk',
	password: 'i-am-henk'
}).complete(function (err, client) {
	henk = client
	// console.info(err, client);
});



