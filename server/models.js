// models.js
var Sequelize = require('sequelize');
var sequelize = new Sequelize('newdb', 'fritz', 'fritz', {
	dialect: 'postgres',
	port: 5432,
	logging: false
});

var client = sequelize.define('Client', {
	name: Sequelize.STRING,
	password: Sequelize.STRING
});

var bill = sequelize.define('Bill',{
	timestamp: Sequelize.DATE,
	title: Sequelize.STRING,
	payed: Sequelize.BOOLEAN,
	price: Sequelize.FLOAT(11)
});

client.hasMany(bill);
bill.hasMany(client);

module.exports = {
	client: client,
	bill: bill,
	db: sequelize
};