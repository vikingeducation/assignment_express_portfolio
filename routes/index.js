var express = require('express');
var router = express.Router();
const {Project, projects} = require('../models/projects');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects: projects });
});

router.get('/projects/:name', function(req, res, next) {
  res.render(req.params.name, { projects: projects });
})

module.exports = router;
