(function () {
  'use strict';

	angular.module('demoApp')
		.directive('listItem', function () {
			return {
				restrict: 'A',
				templateUrl: 'listItem.html'
			};
		});
}());
