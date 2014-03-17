// main.js

var app = angular.module('billing', ['restangular']);

app.controller('Base', ["$scope", "Restangular", function ($scope, Restangular) {
	Restangular.oneUrl('user/', 'http://localhost:3000/api/user').getList()
		.then(function(users) {
			$scope.users = users;
		})
}]);
