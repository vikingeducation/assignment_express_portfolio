var express = require('express');
var router = express.Router();

const {projects} = require('../modules/projects');

let getProject = (projectUrl) => {
  return projects.find( (project) => {
    return project.projectUrl.toUpperCase() === projectUrl.toUpperCase();
  });
};

router.get('/', function(req, res, next) {
  res.render('code', { title: "Projects",
                       projects: projects });
});

router.get('/:projectUrl', function(req, res, next) {
  let project = getProject(req.params.projectUrl);
  res.render('project', { title: project.name,
                          project: project,
                          partial: '_' + project.projectUrl });
});

module.exports = router;
