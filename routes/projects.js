var express = require('express');
var router = express.Router();

const {projects, project} = require("../models/projects");

const findProject = (name) => {
  return projects.find(project => name == project.title);
};
/* GET home page. */
router.get('/:name', function(req, res, next) {
  var project = findProject(req.params.name)
  res.render('projects', { project : project });
});

module.exports = router;
