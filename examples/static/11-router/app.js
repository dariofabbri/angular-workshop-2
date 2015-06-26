(function () {
  'use strict';

	angular.module('demoApp', ['ngRoute', 'uiGmapgoogle-maps'])
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
        .when('/modify/:id', {
					templateUrl: 'modify.html',
					controller: 'ModifyCtrl'
				})
				.otherwise({
					redirectTo: '/list'
				});
		});
}());
