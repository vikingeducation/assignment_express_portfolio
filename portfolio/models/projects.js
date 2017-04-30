class Project {
  constructor(name, link, image, ...technologies) {
    this.name = name;
    this.link = link;
    this.image = image;
    this.technologies = technologies;
  }
}

const projects = [
  new Project("CSS Garden", "https://github.com/tketron/assignment_viking_css_garden", "../public/images/css-garden.png", "HTML", "CSS", "SASS"),
  new Project("Facebook Clone", "https://github.com/tketron/project_prep_facebook_pages", "../public/images/facebook-about.png", "HTML", "CSS", "SASS"),
  new Project("jQuery Widgets", "https://github.com/tketron/assignment_jq_ee_sprint", "../public/images/jquery.png", "jQuery", "Javascript", "HTML", "CSS"),
  new Project("Node Server", "https://github.com/tketron/assignment_build_a_nodejs_server", "../public/images/node.png", "Node.js", "Javascript", "HTML")
]

module.exports = {
  Project,
  projects
}
