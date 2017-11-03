var express = require('express')
var router = express.Router();
var projects = require('../models/projects').projects;


router.get('/', function (req, res, next) {
  res.render('index', {projects: projects})
})


module.exports = router;
