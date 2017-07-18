var express = require('express');
var {projects} = require('../models/projects');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects: projects });
});

module.exports = router;
