var express = require('express');
var router = express.Router();
var projects = require('../models/projects').projects;
var Project = require('../models/projects').Project;

function findProject ( param ) {
  return projects.find( project => {
    return param == project.param
  })
}

/* GET home page. */
router.get('/:project', function(req, res, next) {
  var project = findProject(req.params.project)
  res.render('project', { project: project })
});

module.exports = router
