var express = require('express');
var router = express.Router();

const {projectData} = require("../models/projectsFile");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Projects', projectData: projectData });
});

module.exports = router;
