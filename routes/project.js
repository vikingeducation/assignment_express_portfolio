var express = require('express');
var router = express.Router();
var projects = require('../models/projects').projects
var Project = require('../models/projects').Project


function findProject(name) {
  return projects.find(function(project) {
    return name == project.name
  })
}


router.get('/:name', function (req, res, next) {
  var project = findProject(req.params.name)
  res.render('project', {project: project})
});


module.exports = router
