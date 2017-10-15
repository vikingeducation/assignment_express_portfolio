var express = require('express');
var router = express.Router();
var projects = require('../models/projects').projects

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Full Stack Web Developer\'s Projects', projects: projects });
});

module.exports = router;
