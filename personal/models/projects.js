class Project {
	constructor(name, technology, github) {
		this.name = name;
		this.technology = technology;
		this.github = github;
	}
}

const projects = [
	new Project("musicPlayer", "HTML, CSS, jQuery, JavaScript", "https://github.com/Timibadass/musicplayer"),
	new Project("Roulette", "JavaScript", "https://github.com/Timibadass/assignment_js_sprint/blob/master/Roulette.js"),
	new Project("facebook", "HTML,CSS", "https://github.com/Timibadass/project_prep_facebook_pages")
	]

module.exports = {
	Project,
	projects
}