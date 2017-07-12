class Project(name, git, img, tech, site){
  this.name = name;
  this.git = git;
  this.img = img;
  this.tech = tech;
  this.site = site;
}

//var projects??
const projects = [
  new Project("Royalty Free Music Player",
  "https://github.com/EricGlover/assignment_royalty_free_music_player",
  "public/images/stock.png",
  {
    "jQuery",
    "Html",
    "Css"
  },
  "http://zippy-pest.surge.sh/"),
  new Project("")
]

module.exports = {
  Project,
  projects
}
