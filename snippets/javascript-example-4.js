var names = ['Pippo', 'Pluto', 'Paperino', 'Ciccio'];

var name;
for (var i = 0; i < names.length; i += 1) {
	name = names[i];
	setTimeout(function () {
		console.log(name);
	}, 1000);
}
