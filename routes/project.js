var express = require('express');
var router = express.Router();
const {Project, projects} = require('../models/projects')

function findProject(name){
    return projects.find(function(project) {
      return name == project.name  
        
    })
}
router.get('/:name', function(req, res, next){
    var project = findProject(req.params.name)
    res.render('projects', {project})
    
} );

module.exports = router