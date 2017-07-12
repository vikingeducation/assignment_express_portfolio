var express = require('express');
var router = express.Router();

const {Project, projects} = require('../models/projects.js');

const findProject = (name) => {
  debugger;
  return projects.find( project => name == project.name )
}

router.get('/:name', function( req, res, next ){
  const project = findProject( req.params.name );
  res.render('project', { project: project });
});

module.exports = router;
