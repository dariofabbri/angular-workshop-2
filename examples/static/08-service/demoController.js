(function () {
  'use strict';

  angular.module('demoApp')
    .controller('DemoCtrl', function ($scope, $http) {

  		var promise = $http.get('cities.json');

  		promise.success(function(data, status, headers, config) {
  			$scope.cities = data;

        // Prova a rimuovere il ciclo for!
        //
        for(var i = 0; i < $scope.cities.length; i += 1) {
          var city = $scope.cities[i];
          city.addedOn = new Date(city.addedOn);
        }
  		});

  		promise.error(function(data, status, headers, config) {
  			alert("AJAX failed!");
  		});
  	});
}());
