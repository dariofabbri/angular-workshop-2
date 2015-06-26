(function () {
  'use strict';

	angular.module('demoApp')
		.directive('city', function () {
			return {
				restrict: 'E',
				templateUrl: 'city.html'
			};
		});
}());
