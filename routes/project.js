var express = require('express');
var {Project, projects} = require('../models/projects');
var router = express.Router();

var findProject = (name) => {
	return projects.find(project => name == project.url);
}
/* GET users listing. */
router.get('/:project', function(req, res, next) {
  const project = findProject(req.params.project);
  console.log(project);
  res.render('project', { project:project});
});

module.exports = router;
