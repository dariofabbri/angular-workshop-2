(function () {
  'use strict';

  angular.module('demoApp')
    .controller('DemoCtrl', function ($scope) {

      $scope.cities = [
        { name: 'Rome', country: 'Italy', addedOn: new Date(2015, 5, 1) },
        { name: 'Paris', country: 'France', addedOn: new Date(2015, 5, 4) },
        { name: 'Berlin', country: 'Germany', addedOn: new Date(2015, 5, 6) },
        { name: 'London', country: 'United Kingdom', addedOn: new Date(2015, 5, 8) }
      ];
  	});
}());
