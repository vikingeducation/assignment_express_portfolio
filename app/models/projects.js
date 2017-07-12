class Project {
  constructor(name, git, img, tech, site){
    this.name = name;
    this.git = git;
    this.img = img;
    this.tech = tech;
    this.site = site;
  }
}

//List of Projects ////
const projects = [
  new Project("Royalty Free Music Player",
  "https://github.com/EricGlover/assignment_royalty_free_music_player",
  "images/charlie_mail_room.jpg",
  [
    "jQuery",
    "Html",
    "Css"
  ],
  "http://zippy-pest.surge.sh/"),
  new Project("jQuery Effects Practice",
  "https://github.com/EricGlover/assignment_jq_ee_sprint",
  "images/charlie_mail_room.jpg",
  [
    "jQuery",
    "Html",
    "Css"
  ],
  "http://fancy-fiction.surge.sh/"),
  new Project("Build a Node Server",
  "https://github.com/EricGlover/assignment_build_a_nodejs_server",
  "images/charlie_mail_room.jpg",
  [
    "Node.js"
  ],
  "./index.html"),
  new Project("Clone Facebook",
  "https://github.com/EricGlover/project_prep_facebook_pages",
  "images/charlie_mail_room.jpg",
  [
    "Html",
    "Css"
  ],
  "http://rustic-soup.surge.sh/"),
  new Project("Viking CSS Garden",
  "https://github.com/EricGlover/assignment_viking_css_garden",
  "images/charlie_mail_room.jpg",
  [
    "CSS"
  ],
  "http://momentous-giants.surge.sh/"),
  new Project("Javascript Exercises (Checkers & Roulette)",
  "https://github.com/EricGlover/assignment_js_sprint",
  "images/charlie_mail_room.jpg",
  [
    "Javascript"
  ],
  "./index.html")
]

module.exports = {
  Project,
  projects
}
