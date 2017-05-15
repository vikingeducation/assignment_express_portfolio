var express = require('express');
var router = express.Router();

const {projects} = require('../models/projects')

// const getProject = (name) => {
//   return projects.find(project => name == project.name)
// }
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects: projects });
});

// router.get('/projects/:projects', function(req, res, next){
//   const project = getProject(req.params.project)
//   res.render('project', { project: project})
// })

module.exports = router;
