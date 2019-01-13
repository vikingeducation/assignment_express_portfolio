var express = require('express');
var router = express.Router();
var projects = require('../models/projects').projects;

var findProject = function(name){
  var p;
   projects.forEach(function(project){
    if (project.name === name) {
      p = project;
      return
    }
  });
  return p;
};

router.get('/:project', function(req, res, next){
  var projectName = req.params.project;
  var proj = findProject(projectName);
  res.render('project', {project: proj});
});

module.exports = router;
