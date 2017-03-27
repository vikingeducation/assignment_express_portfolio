var express = require('express');
var router = express.Router();
const {Project, projects} = require('../models/projects');

const findProject = (name) => {
  return projects.find(project => name == project.name);
}

/* GET home page. */
router.get('/:name', function(req, res) {
  //console.log("inside render.get "+ req.params.name);
  const project = findProject(req.params.name);
  //console.log(project);
  res.render('project', { project: project }) // render 'project.hbs' file with the data passed in second argument
});

module.exports = router;
