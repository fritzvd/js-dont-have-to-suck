// main.js

var app = angular.module('billing', ['restangular']);

app.controller('Main', ["$scope", "Restangular", function ($scope, Restangular) {
	Restangular.setErrorInterceptor(true);
	Restangular.setBaseUrl('http://localhost:3000/api/');
	Restangular.all('user').getList()
		.then(function(users) {
			$scope.users = users;
		});

	$scope.moreInfo = function (idx) {
		$scope.users[idx].get()
		.then(function(user) {
			$scope.users[idx] = user;
		});
		$scope.activeUser = idx;
	};

	$scope.activeUser = 0;

	$scope.save = function ($index) {
		var bill = $scope.users[$scope.activeUser].bills[$index];
		Restangular.one('bill', bill.id).get()
			.then(function (serverBill) {
				serverBill.price = bill.price;
				serverBill.put({price: bill.price});
				return serverBill;
			}, function (things) {
				console.info(things);
				return bill;
			});
	}

}]);
