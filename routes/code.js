var express = require('express');
var router = express.Router();

const {codeProjects} = require('../modules/codeProjects');

let getProject = (projectUrl) => {
  return codeProjects.find( (project) => {
    return project.projectUrl.toUpperCase() === projectUrl.toUpperCase();
  });
};

router.get('/', function(req, res, next) {
  res.render('code/index', { title: "Blackwright",
                             projects: codeProjects });
});

router.get('/:projectUrl', function(req, res, next) {
  let project = getProject(req.params.projectUrl);
  res.render('code/project', { title: "Blackwright - " + project.name,
                               project: project,
                               partial: '_' + project.projectUrl });
});

module.exports = router;
