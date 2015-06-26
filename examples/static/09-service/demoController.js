(function () {
	'use strict';

	angular.module('demoApp')
		.controller('DemoCtrl', function ($scope, customService) {

			$scope.getRandomCity = function() {
				customService.getRandomCityId()
					.then(customService.getCityById)
					.then(function(city) {
						customService.getCountryById(city.country)
							.then(function(country){
								$scope.city = city;
								$scope.city.country = country;
							});
					});
			};

		});
}());
