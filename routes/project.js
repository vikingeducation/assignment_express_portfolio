var express = require('express');
var router = express.Router();
let {Project, projects} = require('../models/projects');

const findProject = (name) => {
  return projects.find( (project) => name === project.name );
};

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  let project = findProject(req.params.name);
  res.render('project', { project: project, technologies: project.technologies.join(" | ") });
});

module.exports = router;
