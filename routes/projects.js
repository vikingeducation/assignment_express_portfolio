var express = require('express');
var router = express.Router();

var projects = require("../models/projects");

var findProject = function(name) {
	return projects.find(function(project) {
		return project.name === name;
	});
};

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  var project = findProject(req.params.name)

  res.render("project", {project: project});
});

module.exports = router;
