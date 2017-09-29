var express = require('express');
var router = express.Router();
var projects = require('../models/portfolio').projects;
var Project = require('../models/portfolio').Project;

function findProject(projectname) {
	return projects.find(function(project) {
	  return projectname == project.projectName;
	});
};

router.get('/:projectname', function(req, res, next) {
    var projectname = findProject(req.params.projectname)
    res.render('project', { project: projectname })
});

module.exports = router;