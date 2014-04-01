'use strict';

describe('Main', function () {

	var scope, $httpBackend;

	beforeEach(module('billing', 
		'restangular'));
	beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
		scope = $rootScope.$new();

		var client = [
		{
			name: 'henk',
			id: 1
		}];
		var henk = {
			name: 'henk',
			id: 1,
			bills: [{
				price: 30.00
			}]
		}
		$controller('Main', {$scope: scope});
		$httpBackend = _$httpBackend_;
		$httpBackend.when('GET', 'http://localhost:3000/api/client').respond(client);
		$httpBackend.when('GET', 'http://localhost:3000/api/client/1').respond(henk);
	}));

	it('Should have a activeClient', function () {
		expect(scope.activeClient).toBe(0);
	});

	it('Should perform list API call retrieve clients', function () {
		// we flush the backend because otherwise we have to make
		// async tests.
		$httpBackend.flush();

		// apply forces the app to do a digest loop.
		scope.$apply(); 
		expect(scope.clients[0].name).toBe('henk');
	});

	it('Should get specific API call on moreInfo', function () {
		// first request (getList)
		$httpBackend.flush();

		// we can also manually call a digest loop.
		scope.$digest();
		scope.moreInfo(0);

		// second request (get)
		$httpBackend.flush();

		scope.$digest();
		var bills = scope.clients[0].bills;
		expect(bills[0].price).toBe(30);
	});


});