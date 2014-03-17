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

var user = {
	list: function (req, res, next) {
		req.params.table = 'user';
		primitives.list(req, res, next);
	},
	one: function (req, res) {
		var user;
		models['user'].find(req.params.id)
		.complete(function (err, user) {
			var result = '';
			user = user;
			user.getBills().success(function (bills) {
				user.values.bills = bills;
				res.send(user);
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
	}
}

module.exports = {
	user: user,
	bill: bill
};