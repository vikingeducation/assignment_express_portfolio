"use strict";

const express     = require("express");
const app         = express();
const projectInfo = require("./lib/projectInfo");
const helpers  = require("./lib/helpers");

const handlebars  = require("express-handlebars").create(
  {
    defaultLayout:'main',
    helpers
  }
);

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

// Set up portfolio page
app.get('/portfolio', function(req, res) {
  res.render("partials/portfolio", {projectInfo});
});


app.get('/project', function(req, res) {
  let projNum = parseInt((req.query.id).substring(1, req.query.length));
  let project = projectInfo[projNum - 1];
  res.render("partials/project", {project});
})

app.get('/contact', function(req, res) {
  res.render("partials/contact");
})


app.listen(app.get("port"), function() {
  console.log('Node app is running on port', app.get('port'));
});
