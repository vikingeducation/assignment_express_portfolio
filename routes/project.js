var express = require('express');
var router = express.Router();
const {Project, projects} = require('../projects')

function findProject(name){
    return projects.find(function(project) {
      return name == project.name  
        
    })
}
router.get('/:name', function(req, res, next){
    var project = findGod(req.params.name)
    res.render('proj', {project: project})
    
} );

module.exports = router