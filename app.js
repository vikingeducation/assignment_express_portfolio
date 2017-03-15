const express = require('express');
const app = express();
const compileSass = require('express-compile-sass');
const root = process.cwd();
const projects = require('./modules/project').projects;
const port = process.env.PORT || '3000';

app.set('view engine', 'hbs');

app.use(compileSass({
  root: root,
  sourceMap: true,
  sourceComments: true,
  watchFiles: true,
  logToConsole: false
}));
app.use(express.static(root));

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

app.listen(port, function() {
  console.log('listening to port 3000');
});
