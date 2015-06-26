(function () {
  'use strict';

	angular.module('demoApp', ['ngRoute'])
		.config(function($locationProvider, $routeProvider) {

			$locationProvider.html5Mode(false);

			$routeProvider
				.when('/list', {
					templateUrl: 'list.html',
					controller: 'ListCtrl'
				})
				.when('/detail/:id', {
					templateUrl: 'detail.html',
					controller: 'DetailCtrl'
				})
				.otherwise({
					redirectTo: '/list'
				});
		});
}());
