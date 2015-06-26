(function () {
  'use strict';

  angular.module('demoApp')
    .controller('ListCtrl', function ($scope, customService) {

      function populateCountry(city) {
        customService.getCountryById(city.country).then(function(country) {
          city.country = country;
        });
      }

      $scope.loadCities = function() {
        customService.listCities().then(function(result) {
          $scope.cities = result;

          for(var i = 0; i < $scope.cities.length; i += 1) {

            var city = $scope.cities[i];
            populateCountry(city);
          }
        });
      };

  	});
}());
