var express = require('express');
var router = express.Router();

// Import Project constructor and projects array from models
const { Project, projects } = require("../models/projects");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects: projects });
});

module.exports = router;
