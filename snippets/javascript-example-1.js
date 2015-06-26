function qsort(a) {
	if (a.length === 0) {
		return [];
	}

	var left = [], right = [], pivot = a[0];

	for (var i = 1; i < a.length; i += 1) {
		a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
	}

	return qsort(left).concat(pivot, qsort(right));
}

function generateRandomArray(howmany, min, max) {
	var result = [];

	for (var i = 0; i < howmany; i += 1) {
		result.push(Math.random() * (max - min) + min);
	}

	return result;
}

var array = generateRandomArray(1000, 1, 100);
var sorted = qsort(array);
