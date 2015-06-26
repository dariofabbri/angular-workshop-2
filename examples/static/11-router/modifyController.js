(function () {
  'use strict';

  angular.module('demoApp')
    .controller('ModifyCtrl', function ($scope, $routeParams, customService) {

    var id = $routeParams.id;

    function completeCityInformation(city) {

      $scope.map.center = { latitude: city.lat, longitude: city.lon };
      $scope.map.zoom = 8;

      customService.getCountryById(city.country)
        .then(function(country){
          $scope.city = city;
          $scope.city.country = country;
        });
    }

    // Set some default for Google Maps component.
    //
    $scope.map = {
      center: { latitude: 0, longitude: 0 },
      zoom: 8,
      events: {
        click: function (mapModel, eventName, originalEventArgs) {
          $scope.$apply(function () {
            var e = originalEventArgs[0];
            $scope.city.lat = e.latLng.lat();
            $scope.city.lon = e.latLng.lng();
          });
        }
      }
    };

    // Load city data using passed id parameter.
    //
    customService.getCityById(id).then(function(city) {
      completeCityInformation(city);
  	});

    // Load countries data.
    //
    customService.getCountries().then(function(countries) {
      $scope.countries = countries;
    });


    $scope.doUpdate = function() {

      var city = angular.copy($scope.city);
      city.country = city.country['ISO3166-1-Alpha-3'];

      customService.updateCityById(id, city).then(function(city) {
        completeCityInformation(city);
      });
    };
  });
}());
