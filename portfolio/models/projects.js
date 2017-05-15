class Project {
  constructor(name, technologies, gitHubLink, image){
    this.name = name,
    this.technologies = technologies,
    this.gitHubLink = gitHubLink,
    this.image = image
  }
}

const projects = [
  new Project('decide-for-me', 'rails', 'https://github.com/gregfilipczak/decide-for-me', 'img'),
  new Project('dom-cards', 'jquery', 'githublink', 'img'),
  new Project('tic-tac-toe', 'react', 'link', 'img')s

]

module.exports = {
  Project,
  projects
}
