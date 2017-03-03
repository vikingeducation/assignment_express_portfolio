var express = require('express');
var app = express();
var projects = require('./modules/project').projects;

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('index', {projects: projects});
});

app.get('/:name', function(req, res) {
  var name = req.params.name;
  var project_index = -1;
  projects.forEach(function(project) {
    if (':'+project.name === name) {
      project_index = projects.indexOf(project);
    }
  });
  res.render('name', {
    name: projects[project_index].name,
    tech: projects[project_index].tech,
    link: projects[project_index].link,
    image: projects[project_index].image,
  });
});

app.listen(3000, function() {
  console.log('listening to port 3000');
});
