// Project has name, git link, img file, list of technology used, and website link
class Project {
  constructor(name, git, img, tech, site){
    this.name = name;
    this.git = git;
    this.img = img;
    this.tech = tech;
    this.site = site;
  }
}

// Array of Projects
const projects = [
  new Project("HTML5 Resume",
  "https://github.com/maddiereddy/assignment_html_resume",
  "images/html_resume.png",
  [
    "HTML5",
    "CSS3"
  ],
  "https://maddiereddy.github.io/assignment_html_resume/"),

  new Project("Viking CSS Garden",
  "https://github.com/maddiereddy/assignment_viking_css_garden",
  "images/viking_css_garden.png",
  [
    "HTML5",
    "CSS3"
  ],
  "https://maddiereddy.github.io/assignment_viking_css_garden/"),

  new Project("Facebook Clone",
  "https://github.com/maddiereddy/project_prep_facebook_pages",
  "images/facebook_clone.png",
  [
    "HTML5",
    "CSS3"
  ],
  "https://maddiereddy.github.io/project_prep_facebook_pages/home.html"),

   new Project("Markup Warmup Sprint",
  "https://github.com/maddiereddy/assignment_markup_warmup",
  "images/markup_warmup_sprint.png",
  [
    "HTML5",
    "SASS",
    "CSS3"
  ],
  "https://maddiereddy.github.io/assignment_markup_warmup"),

  new Project("Bootstrap Sprint",
  "https://github.com/maddiereddy/assignment_bootstrap_sprint",
  "images/bootstrap_sprint.png",
  [
    "HTML5",
    "SASS",
    "CSS3",
    "Bootstrap4"
  ],
  "https://maddiereddy.github.io/assignment_bootstrap_sprint/index.html")
]

module.exports = {
  Project,
  projects
}