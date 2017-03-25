class Project {
	constructor(name, link, image, ...technologies) {
		this.name = name,
		this.link = link,
		this.image = image,
		this.technologies = technologies
	}
}

const projects = [
	new Project("Command Line Chess", "https://github.com/nicoasp/TOP---Ruby-Final-Project", "chess.png", "Ruby"),
	new Project("Royalty Free Music Player", "https://github.com/nicoasp/assignment_royalty_free_music_player", "music.png", "Javascript", "jQuery", "HTML5", "CSS3", "SASS"),
	new Project("Node.js Server", "https://github.com/nicoasp/assignment_build_a_nodejs_server", "server.png", "Node.js"),
	new Project("Bootstrap Template", "https://github.com/nicoasp/assignment_bootstrap_sprint", "bootstrap.png", "Bootstrap", "HTML5", "SASS")
]

module.exports = {
	Project,
	projects
}