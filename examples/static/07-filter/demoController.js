(function () {
  'use strict';

  angular.module('demoApp')
    .controller('DemoCtrl', function ($scope) {

      $scope.cities = [
        { name: 'Rome', country: 'Italy', addedOn: new Date(2015, 5, 1) },
        { name: 'Athens', country: 'Greece', addedOn: new Date(2015, 5, 2) },
        { name: 'Madrid', country: 'Spain', addedOn: new Date(2015, 5, 3) },
        { name: 'Paris', country: 'France', addedOn: new Date(2015, 5, 4) },
        { name: 'Bern', country: 'Switzerland', addedOn: new Date(2015, 5, 5) },
        { name: 'Berlin', country: 'Germany', addedOn: new Date(2015, 5, 6) },
        { name: 'Copenhagen', country: 'Denmark', addedOn: new Date(2015, 5, 7) },
        { name: 'London', country: 'United Kingdom', addedOn: new Date(2015, 5, 8) },
        { name: 'Lisbon', country: 'Portugal', addedOn: new Date(2015, 5, 9) },
        { name: 'Reykjavik', country: 'Iceland', addedOn: new Date(2015, 5, 10) }
  		];
  	});
}());
