(function () {
	'use strict';

	angular.module('demoApp')
		.factory('customService', function($http) {

			var service = {

				getRandomCityId: function() {
					var promise = $http.get('/api/cities/random/id')
					.then(function(response) {
						return response.data.randomId;
					});

					return promise;
				},

				getCityById: function(id) {
					var promise = $http.get('/api/cities/' + id)
					.then(function(response) {
						return response.data;
					});

					return promise;
				},

				getCountryById: function(id) {
					var promise = $http.get('/api/countries/' + id)
					.then(function(response) {
						return response.data;
					});

					return promise;
				}
			};

			return service;
		});
}());
