"use strict";

function Project(info) {
  this.projectName = info.projectName;
  this.technologies = info.technologies;
  this.gitLink = info.gitLink;
  this.imageLink = info.imageLink;
  this.description = info.description;
};

let projects = [
	new Project({
		"projectName": "Viking CSS Garden", 
		"technologies": ["CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_viking_css_garden",
		"imageLink": "/images/Viking_CSS_Garden.png",
		"description": "One of my earliest projects, this was a short assignment in which I made use of wireframing & design principles to put together a basic stylesheet."
	}),
	new Project({
		"projectName": "Bootstrap Sprint", 
		"technologies": ["Bootstrap", "Sass", "CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_bootstrap_sprint",
		"imageLink": "/images/Bootstrap_Sprint.png",
		"description": "After learning basic CSS & Sass, my assignment here was to reproduce one of Bootstrap's templates on my own, using Bootstrap itself!"
	}),
	new Project({
		"projectName": "jQuery EE Sprint", 
		"technologies": ["jQuery", "Javascript", "Sass", "CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_jq_ee_sprint",
		"imageLink": "/images/jQuery_EE_Sprint.png",
		"description": "This project had me dive head-first into jQuery, using effects to create a Facebook-style photo tagging box!"
	}),
	new Project({
		"projectName": "Royalty-free Music Player", 
		"technologies": ["jQuery", "Javascript", "CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_royalty_free_music_player",
		"imageLink": "/images/Royalty_Free_Music_Player.png",
		"description": "This was a fun project: create a fully functional music player from scratch using jQuery!"
	}),
	new Project({
		"projectName": "Async node.js", 
		"technologies": ["node.js", "jQuery", "Javascript", "CSS", "HTML"],
		"gitLink": "https://github.com/stevenvz/assignment_async_nodejs",
		"imageLink": "/images/Async_Nodejs.png",
		"description": "Doesn't look like much, but the assignment here was to recreate the Node.js EventEmitter from scratch. Building tools from scratch is a great way to fully learn how they work! (I frequently use animal noises to test my code, as you can see here :D)"
	}),
];

//console.log(projects);

module.exports = {
  Project,
  projects
};