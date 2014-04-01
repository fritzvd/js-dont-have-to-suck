var models = require('./models');

var primitives = {
	list: function (req, res, next) {
		var list;
		models[req.params.table].findAll()
			.success(function (list) {
				list = list;
				res.send(list);
			});
	}
}

var client = {
	list: function (req, res, next) {
		req.params.table = 'client';
		primitives.list(req, res, next);
	},
	one: function (req, res) {
		var client;
		models['client'].find(req.params.id)
		.complete(function (err, client) {
			var result = '';
			client = client;
			client.getBills().success(function (bills) {
				client.values.bills = bills;
				res.send(client);
			});
		});
	}
};

var bill = {
	list: function (req, res, next) {
		req.params.table = 'bill';
		primitives.list(req, res, next);
	},
	one: function (req, res) {
		var bill;
		models['bill'].find(req.params.id)
		.complete(function (err, bill) {
			res.send(bill);
		});
	},
	save: function (req, res) {
		models['bill'].findOrCreate({id: req.params.id}, req.body)
		.success(function (bill, created) {
			if (!created) {
				bill.price = req.body.price;
				bill.payed = req.body.payed;
				bill.save();	
			}
			res.send(bill);
		})
		.error(function (err) {
			res.send('whoops');
			console.info(err);
		});
	}
}

module.exports = {
	client: client,
	bill: bill
};