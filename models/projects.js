var projects = require("./projectinfo");

function Project(project) {
	this.name = project.name;
	this.description = project.description;
	this.language = project.language;
	this.github = project.github;
	this.image = project.image;
};

projects = projects.map(function (project) {
	projectProject = new Project(project);
	return projectProject;
});

module.exports = projects;