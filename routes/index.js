var express = require('express');
var router = express.Router();
var projects = require('../models/projects').projects;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Will Timpson's Portfolio", projects: projects });
  console.log(projects[0])
});

module.exports = router;
