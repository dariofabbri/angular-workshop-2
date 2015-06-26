(function () {
  'use strict';

  angular.module('demoApp')
    .controller('DetailCtrl', function ($scope, $routeParams, customService) {

    var id = $routeParams.id;

    $scope.map = { center: { latitude: 0, longitude: 0 }, zoom: 8 };

    customService.getCityById(id).then(function(city) {

      $scope.map = { center: { latitude: city.lat, longitude: city.lon }, zoom: 8 };

      customService.getCountryById(city.country)
        .then(function(country){
          $scope.city = city;
          $scope.city.country = country;
        });
      });
  	});
}());
