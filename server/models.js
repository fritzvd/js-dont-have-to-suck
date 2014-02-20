// models.js
var Sequelize = require('sequelize');
var sequelize = new Sequelize('newdb', 'fritz', 'fritz', {
	dialect: 'postgres',
	port: 5432
});

var user = sequelize.define('User', {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});

var bill = sequelize.define('Bill',{
	timestamp: Sequelize.DATE,
	novat: Sequelize.FLOAT(11)
});

user.hasMany(bill);
bill.belongsTo(user);

module.exports = {
	user: user,
	db: sequelize
};