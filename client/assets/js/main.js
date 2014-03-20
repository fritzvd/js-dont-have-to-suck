// main.js

var app = angular.module('billing', ['restangular']);

app.controller('Base', ["$scope", "Restangular", function ($scope, Restangular) {
	// Restangular.oneUrl('users', 'http://localhost:3000/api/user')
	Restangular.allUrl('users', 'http://localhost:3000/api/user').getList()
		.then(function(users) {
			$scope.users = users;
		});

	$scope.moreInfo = function (user) {
		user.oneUrl('users', 'http://localhost:3000/api/user/' + user.id).get()
		.then(function(serverUser) {
			$scope.users.filter(function (localUser){
				if (serverUser.id == localUser.id) {
					localUser = serverUser;
					console.info($scope.users)
					// $scope.users.push(serverUser)
				}
			})
			// for (var i; i < $scope.users.length; i++) {
			// 	console.info($scope.users, i);
			// 	console.info($scope.users[i]);
			// 	if ($scope.users[i].id == user.id) {
			// 		$scope.users[i] = user;
			// 		debugger
			// 	}
			// }
		});
	};
}]);
