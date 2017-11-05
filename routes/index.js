var express = require('express');
var router = express.Router();
var projects = require('../projects').projects
var Project = require('../projects').Project

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects: 'projects' });
});


module.exports=router