var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var serveIndex = require('serve-index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'It works!' });
});

var countries = require('./routes/country');
var cities = require('./routes/city');

// Country related routes.
//
router.get('/countries', countries.list);
router.get('/countries/:id', countries.retrieve);

// City related routes.
//
router.get('/cities', cities.list);
router.get('/cities/:id', cities.retrieve);
router.get('/cities/random/id', cities.retrieveRandomId);
router.post('/cities', cities.create);
router.put('/cities/:id', cities.update);
router.delete('/cities/:id', cities.delete);


app.use('/api', router);

app.use('/examples', serveIndex('static', {icons: true}));
app.use('/examples', express.static('static'));

app.listen(port);
console.log('Magic is happening on port ' + port);
