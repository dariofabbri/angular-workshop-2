'use strict';

angular.module('demoApp')
  .controller('DemoCtrl', function ($scope, randomService) {

		$scope.generate = function() {
			
			$scope.mondrianData = randomService.generateMondrian(600, 400);
		}

	});
