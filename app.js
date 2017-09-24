var express = require('express');
var app = express();

var htmlController = require('./controllers/htmlController');

//setup handlebars view engine
var handlebars = require('express-handlebars')
	.create({defaultLayout: 'layout'}); // default handbars layout page
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); // sets express view engine to handlebars

app.set('port', process.env.PORT || 4000);

//this serves up the static content (like images, css, other js files)
//place right above routing
//this is middleware
app.use(express.static(__dirname + '/public'));

//htmlController code moved from here to ./controllers/htmlController.js
//place before app.use() catch-all code
htmlController(app);

//app.use() catch-all code
app.use(function(req, res) {
	res.status(404); // respond with status code
	res.render('404'); // respond with 404.handlebars
});

app.listen(app.get('port'), function() {
	console.log('Express listening on: http://localhost:4000');
});
