var express = require('express');
var router = express.Router();
const { Project, projects} =  require('../models/projects');

/* GET users listing. */
const findProject = (name) => {
	return projects.find(project => name == project.name);
}

router.get('/:name', (req, res, next) => {
	const project = findProject(req.params.name);
	res.render(`${project.name}`, { project: project });
});

module.exports = router;
