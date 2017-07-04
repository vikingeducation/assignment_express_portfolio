var express = require('express');
var router = express.Router();

const projects = require('../models/projects').projects;
const getProject = require('../models/projects').getProject;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Will Timpson's Portfolio", projects: projects });
});

/* GET project page */
router.get('/:projectSlug', function(req, res, next) {
  let project = getProject(req.params.projectSlug);
  res.render('project', {title: "Will Timpson's Portfolio", project: project})
})

module.exports = router;
