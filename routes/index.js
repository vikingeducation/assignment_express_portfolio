var express = require('express');

// Here we build the router.
var router = express.Router();
const {projects} = require('../models/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Portfolio', allProjects: projects });
});

module.exports = router;
