var express = require('express');
var router = express.Router();

const {designProjects} = require('../modules/designProjects');

let getProject = (projectUrl) => {
  return designProjects.find( (project) => {
    return project.projectUrl.toUpperCase() === projectUrl.toUpperCase();
  });
};

router.get('/', function(req, res, next) {
  res.render('design/index', { title: "Projects",
                       projects: designProjects });
});

router.get('/:projectUrl', function(req, res, next) {
  let project = getProject(req.params.projectUrl);
  res.render('design/project', { title: project.name,
                          project: project,
                          partial: '_' + project.projectUrl });
});

module.exports = router;
