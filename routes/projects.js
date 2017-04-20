var express = require('express');
var router = express.Router();
const {Project, projects} = require('../models/projects');

const findProject = (id) => {
  return projects.find(project => id == project.id);
};

router.get('/:id', (req, res, next) => {
  const project = findProject(req.params.id);
  res.render('project', {
    title: "Portfolio: " + project.name,
    project: project});
});

module.exports = router;