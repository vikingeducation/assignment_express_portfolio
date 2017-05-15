var express = require('express');
var router = express.Router();

const {Project, projects} = require('../models/projects')

const getProject = (name) => {
  return projects.find(project => name == project.name)
}

router.get('/:project', function(req, res, next){
  const project = getProject(req.params.project)
  res.render('project', { project: project})
})

module.exports = router;
