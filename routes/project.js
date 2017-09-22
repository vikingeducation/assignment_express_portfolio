var express = require('express');
var router = express.Router();

// Import Project constructor and projects array from models
const { Project, projects } = require("../models/projects");

// Define findProject
const findProject = (name) => {
  return projects.find(project => name == project.name)
};

/* GET home page. */
router.get('/:name', function(req, res, next) {
  const name = decodeURIComponent(req.params.name);
  const project = findProject(name);
  res.render('project', { project: project });
});

module.exports = router;
