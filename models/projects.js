class Project {
  constructor(name, repo, image, ...technologies) {
	this.name = name;
	this.repo = repo;
	this.image = image;
	this.technologies = technologies;
  }
}

const projects = [
  new Project('CSS Garden', 'https://github.com/sarahschoonmaker/assignment_viking_css_garden', 'http://localhost:3000/images/garden.png', 'HTML', 'CSS'),
  new Project('Facelook', 'https://github.com/sarahschoonmaker/project_prep_facebook_pages', 'http://localhost:3000/images/facelook.png', 'HTML', 'CSS'),
  new Project('Music Player', 'https://github.com/sarahschoonmaker/assignment_royalty_free_music_player', 'http://localhost:3000/images/rfmp.png', 'JavaScript', 'HTML', 'CSS'),
  new Project('Node.js Server', 'https://github.com/sarahschoonmaker/assignment_build_a_nodejs_server', 'http://localhost:3000/images/server.png', 'Node.js', 'JavaScript', 'HTML')
]

  module.exports = {
  	Project,
  	projects
  }