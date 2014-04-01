// main.js

var app = angular.module('billing', ['restangular']);

app.controller('Main', ["$scope", "Restangular", function ($scope, Restangular) {
	Restangular.setErrorInterceptor(true);
	Restangular.setBaseUrl('http://localhost:3000/api/');
	Restangular.all('client').getList()
		.then(function(clients) {
			$scope.clients = clients;
		});

	$scope.moreInfo = function (idx) {
		$scope.clients[idx].get()
		.then(function(client) {
			$scope.clients[idx] = client;
		});
		$scope.activeClient = idx;
	};

	$scope.activeClient = 0;

	$scope.save = function ($index) {
		var bill = $scope.clients[$scope.activeClient].bills[$index];
		Restangular.one('bill', bill.id).get()
			.then(function (serverBill) {
				serverBill.price = bill.price;
				serverBill.payed = bill.payed;
				serverBill.put({price: bill.price, payed: bill.payed});
				return serverBill;
			}, function (things) {
				console.info(things);
				return bill;
			});
	}

}]);
