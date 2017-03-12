var express = require('express');
var router = express.Router();

const {projects} = require('../modules/projects');

let getProject = (name) => {
  return projects.find( (project) => {
    return project.name.toUpperCase() === name.toUpperCase();
  });
};

router.get('/:name', function(req, res, next) {
  let project = getProject(req.params.name);
  res.render('project', { project: project });
});

module.exports = router;
