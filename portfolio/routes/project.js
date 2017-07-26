var express = require('express');
var router = express.Router();
const {Project, projects} = require('../models/projects')

const findProject = (name) => {
  return projects.find(project => name == project.name)
}

/* GET home page. */
router.get('/:name', function(req, res, next) {
  const project = Project(req.params.name)
  res.render('project', { project: project })
});

module.exports = router
