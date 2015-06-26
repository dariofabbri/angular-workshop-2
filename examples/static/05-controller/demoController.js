(function() {
  'use strict';

  angular.module('demoApp')
    .controller('DemoCtrl', function ($scope) {

      // $scope.newCity = 'Madrid';
  		// $scope.newCountry = 'Spain';

  		$scope.cities = [];

  		$scope.addNewCity = function () {
  			$scope.cities.push({
  				name: $scope.newCity,
  				country: $scope.newCountry
  			});
  		};
  	});
})();
