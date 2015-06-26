(function () {
  'use strict';

  angular.module('demoApp')
    .controller('DetailCtrl', function ($scope, $routeParams, customService) {

    var id = $routeParams.id;
    
    customService.getCityById(id).then(function(city) {
        customService.getCountryById(city.country)
          .then(function(country){
            $scope.city = city;
            $scope.city.country = country;
          });
      });
  	});
}());
