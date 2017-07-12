var express = require('express');
var router = express.Router();

const {gods} = require('../models/gods')
const {projects} = require('../models/projects');

debugger;

// Notice how we're calling get on the router
// rather than on the application
router.get('/', function(req, res, next) {
  res.render('index', { gods: gods, projects: projects, title: 'Express'} );
})

module.exports = router;

/*
// routes/index.js

var express = require('express')

// Here we build the router.
var router = express.Router()
const {gods} = require('../models/gods')

// Notice how we're calling get on the router
// rather than on the application
router.get('/', function(req, res, next) {
  res.render('index', { gods: gods })
})

// Finally, we return the router so we can
// use it in our app.js
module.exports = router



// app.js
var express = require('express')

// And here we go, requiring our router
var index = require('./routes/index')

// ...

app.use('/', index)

// ...

*/
