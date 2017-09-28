"use strict";

function Project(info) {
  this.projectName = info.projectName;
  this.technologies = info.technologies;
  this.gitLink = info.gitLink;
  this.imageLink = info.imageLink;
};

let projects = [
	new Project({
		"projectName": "Viking CSS Garden", 
		"technologies": ["CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_viking_css_garden",
		"imageLink": ""
	}),
	new Project({
		"projectName": "Bootstrap Sprint", 
		"technologies": ["Bootstrap", "CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_bootstrap_sprint",
		"imageLink": ""
	}),
	new Project({
		"projectName": "jQuery EE Sprint", 
		"technologies": ["jQuery", "Javascript", "Sass", "CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_jq_ee_sprint",
		"imageLink": ""
	}),
	new Project({
		"projectName": "Royalty-free Music Player", 
		"technologies": ["jQuery", "Javascript", "CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_royalty_free_music_player",
		"imageLink": ""
	}),
	new Project({
		"projectName": "Async node.js", 
		"technologies": ["node.js", "jQuery", "Javascript", "CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_async_nodejs",
		"imageLink": ""
	}),
];

console.log(projects);

module.exports = {
  Project,
  projects
};