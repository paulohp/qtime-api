var express = require('express'),
    app     = express(),
    rekwest = require('request');

var port = process.env.PORT || 8080;

var router = express.Router();
// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

router.get('/teams', function(req, res){
  rekwest('http://api.espn.com/v1/sports/baseball/mlb/teams?apikey=b3qde5rj9x5s72ezgnmphkbv', function(err, response, body){
    if (!err && response.statusCode == 200) {
      res.jsonp(body);
    } 
  });
});



app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
