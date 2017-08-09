var express = require('express');
var router = express.Router();
const {Project, projects} = require('../models/projects')

const findProjectBySlug = (local_var_for_slug) => {
  return projects.find(projects => local_var_for_slug == projects.slug)
}

router.get('/:project_slug', function(req, res, next) {
  const selected_project = findProjectBySlug(req.params.project_slug)
  res.render('project', { project: selected_project })
});

module.exports = router;