'use strict';

var express = require('express');
var router = express.Router();

var _require = require('../models/projects'),
    Project = _require.Project,
    projects = _require.projects;

var findProject = function findProject(name) {
  return projects.find(function (project) {
    return name === project.name;
  });
};

/* GET home page. */
router.get('/:name', function (req, res, next) {
  var project = findProject(req.params.name);
  res.render('project', { project: project });
});

module.exports = router;
//# sourceMappingURL=projects.js.map