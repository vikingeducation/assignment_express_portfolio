var express = require('express');
var router = express.Router();
var projects = require('../models/portfolio').projects;
var Project = require('../models/portfolio').Project;

function findProject(projectname) {
	return projects.find(function(item) {
	  return item.projectName == projectname;
	});
};

router.get('/:projectname', function(req, res, next) {
    var project = findProject(req.params.projectname);
    res.render('project', { project: project })
});

module.exports = router;