var express = require('express');
var router = express.Router();

const {illoProjects} = require('../modules/illoProjects');

let getProject = (projectUrl) => {
  return illoProjects.find( (project) => {
    return project.projectUrl.toUpperCase() === projectUrl.toUpperCase();
  });
};

router.get('/', function(req, res, next) {
  res.render('illo/index', { title: "Blackwright",
                             projects: illoProjects });
});

router.get('/:projectUrl', function(req, res, next) {
  let project = getProject(req.params.projectUrl);
  res.render('illo/project', { title: "Blackwright - " + project.name,
                               project: project,
                               partial: '_' + project.projectUrl });
});

module.exports = router;
