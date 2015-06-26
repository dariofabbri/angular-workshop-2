var countries = require('./country-codes.json');

exports.list = function(req, res) {

  res.send(countries);
};


exports.retrieve = function (req, res) {

	var id = req.params.id;

  for(var i = 0; i < countries.length; i += 1) {

      var country = countries[i];

      if(country['ISO3166-1-Alpha-3'] === id) {
        res.send(country);
        return;
      }
  }

  res.statusCode = 404;
  res.send('Country not found.');
};
