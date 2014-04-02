var views = require('./views');

function setup(app) {
	app.get('/api/client', views.client.list);
	app.get('/api/client/:id', views.client.one);
	app.get('/api/bill', views.bill.list);
	app.get('/api/bill/unpaid', views.bill.unpaid);
	app.get('/api/bill/:id', views.bill.one);
	app.put('/api/bill/:id', views.bill.save);
}
 
exports.setup = setup;