var cities = require('./cities.json');

exports.list = function (req, res) {

  res.send(cities);
};


exports.retrieve = function (req, res) {

	var id = parseInt(req.params.id);

  for(var i = 0; i < cities.length; i += 1) {

      var city = cities[i];

      if(city.id === id) {
        res.send(city);
        return;
      }
  }

  res.statusCode = 404;
  res.send('City not found.');
};


exports.retrieveRandomId = function (req, res) {

  var index = Math.floor(Math.random() * cities.length);

  res.send({
    randomId: cities[index].id
  });
};


exports.create = function (req, res) {

	// The id field must not be specified.
	//
	if(req.body.id) {
		res.statusCode = 400;
		return res.send('Unexpected id field.');
	}

	// Check if name field has been specified.
	//
  if(!req.body.name) {
		res.statusCode = 400;
		return res.send('Name field must be specified.');
	}

	// Check if country field has been specified.
	//
  if(!req.body.country) {
		res.statusCode = 400;
		return res.send('Country field must be specified.');
	}

  // Find next available id.
  //
  var max = 0;
  for(var i = 0; i < cities.length; i += 1) {

      var city = cities[i];

      if(city.id > max) {
        max = city.id;
      }
  }

  // Build city object.
  //
  var obj = req.body;
  obj.id = max + 1;

  // Store the newly created object in the data structure.
  //
  cities.push(obj);

  // Return result object.
  //
	return res.send(obj);
};


exports.update = function (req, res) {

  var id = parseInt(req.params.id);

	// The id field, if specified, must match the path parameter.
	//
	if(req.body.id && id !== req.body.id) {
		res.statusCode = 400;
		return res.send('Mismatched id field.');
	}

	// Check if name field has been specified.
	//
  if(!req.body.name) {
		res.statusCode = 400;
		return res.send('Name field must be specified.');
	}

	// Check if country field has been specified.
	//
  if(!req.body.country) {
		res.statusCode = 400;
		return res.send('Country field must be specified.');
	}

  // Find specified city by id.
  //
  var found = null;
  for(var i = 0; i < cities.length; i += 1) {

      var city = cities[i];

      if(city.id === id) {
        found = city;
        break;
      }
  }

  if(!found) {
    res.statusCode = 404;
		return res.send('City not found.');
  }

  found.name = req.body.name;
  found.country = req.body.country;
  found.population = req.body.population;
  found.lat = req.body.lat;
  found.lon = req.body.lon;

  // Return result object.
  //
	return res.send(found);
};


exports.delete = function (req, res) {

  var id = parseInt(req.params.id);

  // Find specified city by id.
  //
  var index = null;
  var found = null;
  for(var i = 0; i < cities.length; i += 1) {

      var city = cities[i];

      if(city.id === id) {
        found = city;
        index = i;
        break;
      }
  }

  if(!index) {
    res.statusCode = 404;
		return res.send('City not found.');
  }

  // Remove the found city from cities array.
  //
  left = cities.slice(0, index);
  right = cities.slice(index + 1, cities.length);
  Array.prototype.push.apply(left, right);
  cities = left;

  // Return result object.
  //
	return res.send(found);
};
