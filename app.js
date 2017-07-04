"use strict";

const express     = require("express");
const app         = express();
const handlebars  = require("express-handlebars").create({defaultLayout:'main'});


// Set handlebars framework on top of express
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", (process.env.PORT || 3000));

// Set up static content directory (set to '/public')
app.use(express.static(__dirname + '/public'));

// Set up all possible pages
app.get('/', function(req, res) {
  res.render("partials/homepage");
});


app.listen(app.get("port"), function() {
  console.log('Node app is running on port', app.get('port'));
});
