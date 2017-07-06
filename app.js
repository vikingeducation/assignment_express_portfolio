"use strict";

require("dotenv").config();
const express     = require("express");
const app         = express();
const projectInfo = require("./lib/projectInfo");
const helpers     = require("./lib/helpers");
const nodemailer  = require("nodemailer");
const json        = require("json");
const bodyParser  = require("body-parser");

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MYEMAIL,
    pass: process.env.MYPASSWORD
  }
});

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

});

app.post('/contact', function(req, res) {
  res.render("partials/contact");
  console.log(req.body);

    let mailOptions = {
      from: req.body.email,
      to: process.env.MYEMAIL,
      subject: `message submitted from your website by ${req.body.name}`,
      text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
});


app.listen(app.get("port"), function() {
  console.log('Node app is running on port', app.get('port'));
});
