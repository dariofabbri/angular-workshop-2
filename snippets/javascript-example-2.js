function square1(number) {
	return number * number;
}

var square = function(number) {
	return number * number;
}

function addSquares(a, b) {
	function square(x) {
		return x * x;
	}
	return square(a) + square(b);
}

var filter = function(array, predicate) {
	var results = [];

	for(var i = 0; i < array.length; i += 1) {
		if (predicate(array[i])) {
			results.push(array[i]);
		}
	});

	return results;
};
