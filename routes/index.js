var express = require('express');
var router = express.Router();
const {Project, projects} = require('../models/projects');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects: projects });
});

router.get('/projects/:name', function(req, res, next) {
  if(err){
    writeHead(404);
    res.end("404 : Not Found... What a bummer!");
  }
  res.render(req.params.name);
})

module.exports = router;
