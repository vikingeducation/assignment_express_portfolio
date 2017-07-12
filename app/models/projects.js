class Project {
  //hopefully it accepts duration as an optional argument
  constructor(name, git, img, tech, site, comments, duration){
    this.name = name;
    this.git = git;
    this.img = img;
    this.tech = tech;
    this.site = site;
    //defaults incase not provided right now.
    this.comments = comments || "";
    this.duration = duration || 5;
  }
}

//List of Projects ////
const projects = [
  new Project("Royalty Free Music Player",
  "https://github.com/EricGlover/assignment_royalty_free_music_player",
  "images/royalty_free_player.png",
  [
    "jQuery",
    "Html",
    "Css"
  ],
  "http://zippy-pest.surge.sh/"),
  new Project("jQuery Effects Practice",
  "https://github.com/EricGlover/assignment_jq_ee_sprint",
  "images/duck_hunt.png",
  [
    "jQuery",
    "Html",
    "Css"
  ],
  "http://fancy-fiction.surge.sh/"),
  new Project("Build a Node Server",
  "https://github.com/EricGlover/assignment_build_a_nodejs_server",
  "images/node_server.png",
  [
    "Node.js"
  ],
  "./index.html"),
  new Project("Clone Facebook",
  "https://github.com/EricGlover/project_prep_facebook_pages",
  "images/facebook_clone.png",
  [
    "Html",
    "Css"
  ],
  "http://rustic-soup.surge.sh/"),
  new Project("Viking CSS Garden",
  "https://github.com/EricGlover/assignment_viking_css_garden",
  "images/viking_css_garden.png",
  [
    "CSS"
  ],
  "http://momentous-giants.surge.sh/"),
  new Project("Javascript Exercises (Checkers & Roulette)",
  "https://github.com/EricGlover/assignment_js_sprint",
  "images/checkers.png",
  [
    "Javascript"
  ],
  "./index.html")
]

module.exports = {
  Project,
  projects
}
