var express = require('express');
var router = express.Router();
const { projects } = require('../models/projects');

const findProject = (name) => {
	return projects.find(project => name == project.name);
}

/* GET users listing. */
router.get('/:name', function(req, res, next) {
	const project = findProject(req.params.name);
  res.render('project', { project: project });
});

// note to self - router.get('/') and a res.render('project') mean the path is /project.
// if you did router.get('/project') and the same res.render, you will be trying
// to do path is /project/project and you will get a 404.

module.exports = router;
