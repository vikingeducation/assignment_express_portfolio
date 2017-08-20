Class project {
  constructor(name, gitHub, img1, img2 ...technologies) {
    this.name = name
    this.gitHub = gitHub
    this.img1 = img1
    this.img2 = img2
    this.technologies = technologies
  }
};

const projectData = [
  new project("assignment_jq_ee_sprint", "https://github.com/coelacanth7/assignment_jq_ee_sprint", "../public/images/jqimg1.png", "../public/images/jqimg2.png", "html", "css", "javascript", "jquery" )
  new project("assignment_royalty_free_music_player", "https://github.com/coelacanth7/assignment_royalty_free_music_player", "../public/images/roymusicimg1.png", "../public/images/roymusicimg2.png", "html", "css", "bootstrap", "javascript", "jquery" )
  new project("assignment_js_sprint", "https://github.com/coelacanth7/assignment_js_sprint", "../public/images/rolimg1.png", "../public/images/rolim2.png", "javascript")
]

module.exports = {
  project,
  projectData
}
