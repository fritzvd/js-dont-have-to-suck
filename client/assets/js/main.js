// main.js

var app = angular.module('billing', ['restangular']);

app.controller('Base', ["$scope", "Restangular", function ($scope, Restangular) {
	// Restangular.oneUrl('users', 'http://localhost:3000/api/user')
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
		console.info(bill);
		// debugger
		Restangular.one('bill', bill.id).get()
			.then(function (serverBill) {
				serverBill.price = bill.price;
				// console.info(serverBill.price);
				// debugger
				serverBill.put({price: bill.price});
			});
	}

}]);
