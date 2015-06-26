var Person = function (name, surname) {

	this.name = name;
	this.surname = surname;
}

Person.prototype.greet = function () {
		console.log('Ciao, sono ' + this.name + ' ' + this.surname);
}


var paperino = new Person('Paolino', 'Paperino');
paperino.greet(); // Ciao, sono Paolino Paperino

var ciccio = new Person('Ciccio', 'Di Nonna Papera');
ciccio.greet(); // Ciao, sono Ciccio Di Nonna Papera

Person.prototype.initials = function() {
	console.log(this.name.substring(0, 1) + this.surname.substring(0, 1));
}

paperino.initials(); // PP
ciccio.initials(); // CD

paperino.getName = function() {
	return this.name;
}

console.log(paperino.getName()); // Paolino
console.log(ciccio.getName()); // ERRORE!
