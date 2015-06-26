(function () {

  'use strict';

  angular.module('demoApp')
    .controller('DemoCtrl', function ($scope) {

  		$scope.cities = [
  			{ name: 'Rome', country: 'Italy' },
  			{ name: 'Paris', country: 'France' },
  			{ name: 'Berlin', country: 'Germany' },
  			{ name: 'London', country: 'United Kingdom' }
  		];
  	});
}());
