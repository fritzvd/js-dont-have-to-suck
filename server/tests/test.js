var request = require('supertest');
var chai = require('chai');

var server = require('../server');
var models = require('../models');

var expect = chai.expect;

describe('Models', function () {
	it('should expose the table names', function () {
		expect(models.hasOwnProperty('client')).to.equal(true);
	})
});

describe('Server', function () {
	var agent;
	before(function (done) {
		server.start(5003);
		agent = request.agent('http://localhost:5003/api/')
		done();
	});

	it('should return json', function (done) {
		agent
			.get('client')
			.expect('Content-Type', 'application/json; charset=utf-8')
			.expect(200);
		done();
	});

	it('should return a client list', function (done) {
		agent
			.get('client')
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body.hasOwnProperty('length')).to.equal(true);
				done();
			});
	});

	it('should return one client', function (done) {
		agent
			.get('client/1')
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body.hasOwnProperty('name')).to.equal(true);
				done();
			})
	});

	it('should return a list of bills', function (done) {
		agent
			.get('bill')
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body.hasOwnProperty('length')).to.equal(true);
				done();
			})
	});


	it('should return a list of unpaid bills', function (done) {
		agent
			.get('bill/unpaid')
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body.hasOwnProperty('length')).to.equal(true);
				done();
			})
	});

	it('should return a summary based on the date', function (done) {
		agent
			.get('bill/?start=2013&end=2014')
			.end(function (err, res) {
				if (err) return done(err);
				var datewithin = new Date(res.body[0].timestamp);
				var statement = ((datewithin.getFullYear() >= 2013) &&
				 				 (datewithin.getFullYear() <= 2014));
				expect(statement).to.equal(true);
				done();
			});
	});

});

