function outside(x) {
	function inside(y) {
		return x + y;
	}
	return inside;
}

var fn_inside = outside(3);
var result1 = fn_inside(5); // 8

var result2 = outside(4)(5); // 9
var result3 = fn_inside(3); // 6
