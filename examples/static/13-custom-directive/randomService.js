'use strict';

angular.module('demoApp')
  .factory('randomService', function() {

		var service = {

			getInt: function(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
			},

			getColor: function() {
				
				var result = 'rgb(' + 
					this.getInt(0, 255) + ', ' +
					this.getInt(0, 255) + ', ' +
					this.getInt(0, 255) + ')';
				return result;
			},

			generateMondrian: function(width, height) {

				var result = {
					width: width,
					height: height
				};

				var boxes = this.getInt(10, 100);

				result.boxes = [];

				for(var i = 0; i < boxes; i += 1) {
					
					var box = {
						x: this.getInt(0, width),
						y: this.getInt(0, height),
						width: this.getInt(10, width),
						height: this.getInt(10, height),
						fill: this.getColor()
					};

					result.boxes.push(box);
				}

				return result;
			}
		};
		return service;
	});

