'use strict';

angular.module('demoApp')
	.directive('mondrian', function () {
		return {
			restrict: 'E',
			template: '<canvas></canvas>',
			replace: true,
			link: function($scope, element, attrs) {

				$scope.$watch('mondrianData', function(data) {

					if(!data) {
						return;
					}

					element.attr('width', data.width);
					element.attr('height', data.height);
	
					var canvas = element[0];
					var ctx = canvas.getContext('2d');
					
					ctx.clearRect(0, 0, data.width, data.height);
					ctx.strokeStyle = 'rgb(0, 0, 0)';
					ctx.lineWidth = 2.0;

					for(var i = 0; i < data.boxes.length;  i += 1) {
						var box = data.boxes[i];

						ctx.fillStyle = box.fill;
						ctx.fillRect(box.x, box.y, box.width, box.height);
						ctx.strokeRect(box.x, box.y, box.width, box.height);
					}
				});
			}
		}
	});
