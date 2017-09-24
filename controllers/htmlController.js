module.exports = function(app) {
	var projectEngine = require('../models/myProjects');

	//don't think I need this:
	//app.use(express.bodyParser());

	app.get('/', function(req, res) {
		var myProjects = projectEngine.getAllProjects();
		res.render('home', { title:"My Projects", projects:myProjects } );
	});

	app.get('/about', function(req, res) {
		res.render('about', {title:"About Me"});
	});

	app.get('/project/:id', function(req, res) {
		var oneProject = projectEngine.getOneProject(req.params.id);
		//	res.render('article', { title:entry.title, blog:entry } );
		res.render('project', { title: "One Project", project:oneProject } );
	});
}