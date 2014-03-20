var views = require('./views');

function setup(app) {
	app.get('/api/user', views.user.list);
	app.get('/api/user/:id', views.user.one);
	app.get('/api/bill', views.bill.list);
	app.get('/api/bill/:id', views.bill.one);
	app.put('/api/bill/:id', views.bill.save);
}
 
exports.setup = setup;