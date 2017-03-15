var express = require('express');
var router = express.Router();

const {projects} = require('../modules/projects');

router.get('/', function(req, res, next) {
  res.render('code', { title: "Projects",
                      projects: projects });
});

module.exports = router;
