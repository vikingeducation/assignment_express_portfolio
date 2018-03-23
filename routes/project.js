

var express = require('express');
var router = express.Router();

var {projectData, Project} = require('../models/projectsFile');

const findProject = (nameparam) => {
  return projectData.find(projectData => nameparam == projectData.name)
};

console.log('this is the data returned' + projectData);
console.log('some Project data' + Project);

router.get('/:project_name', function(req, res, next){

  const project = findProject(req.params.project_name);

  console.log("this is a local obj" + projectData)
  console.log('custom local obj' + project)
  res.render('project', { project: project });

});

module.exports = router;
