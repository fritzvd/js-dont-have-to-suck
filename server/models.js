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

module.exports = {
	user: user,
	db: sequelize
};