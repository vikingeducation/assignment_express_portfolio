var express = require('express');
var router = express.Router();
var projects = require('../models/portfolio').projects;
var Project = require('../models/portfolio').Project;

/* GET home page. */
router.get('/resume', function(req, res, next) {
  res.render('resume');
});

module.exports = router;