var models = require('./models');

models.db.sync({force: 	true})
	.complete(function (error) {
		if (!!err) {
			console.log('An error occured:', err);
			process.exit();
		} else {
			console.log('synced tables');
			process.exit();
		}	
	});