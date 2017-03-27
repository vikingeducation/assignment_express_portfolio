class Project {
  constructor(name, description, technologies, live_link, Github_url, image) {
    this.name = name;
    this.description = description;
    this.technologies = technologies;
    this.live_link = live_link;
    this.Github_url = Github_url;
    this.image = image;
  }
}

const projects = [
  new Project("HTML Resume", "Simple Resume", "HTML", "https://deven1.github.io/assignment_html_resume/", "https://github.com/deven1/assignment_html_resume", "../../images/html-resume.jpg"),
  new Project("CSS Garden", "Showcasing power of CSS", "HTML5, CSS3", "https://deven1.github.io/assignment_viking_css_garden/", "https://github.com/deven1/assignment_viking_css_garden", "../../images/css-garden.jpg"),
  new Project("Markup Warmup", "Responsive Blog Design", "HTML5, CSS3", "https://deven1.github.io/assignment_markup_warmup/", "https://github.com/deven1/assignment_markup_warmup", "../../images/markup-warmup-1.jpg"),
  new Project("Facelook", "Facebook Clone", "HTML5, CSS3", "http://numerous-error.surge.sh", "https://github.com/deven1/project_prep_facebook_pages", "../../images/FB-clone1.jpg"),
  new Project("Bootstrap Sprint", "Bootstrap Template", "HTML5, CSS3, Bootstrap API", "https://deven1.github.io/assignment_bootstrap_sprint/", "https://github.com/deven1/assignment_bootstrap_sprint", "../../images/Bootstrap.png"),
  new Project("JS Test Suite", "Automated test cases", "HTML5, CSS3, JavaScript", "https://deven1.github.io/assignment_js_sprint/",  "https://github.com/deven1/assignment_js_sprint", "../../images/JS-TestSuite.jpg"),
  new Project("Node Hello World", "NodeJS 101", "NodeJS, JavaScript", "None", "https://github.com/deven1/assignment_node_hello_world", "../../images/Node-helloworld.png"),
  new Project("Custom Async Tasks in NodeJS", "Async NodeJS", "NodeJS, JavaScript", "None", "https://github.com/deven1/assignment_async_nodejs", "../../images/Node-custom-emitter.png")
]

module.exports = {
  Project,
  projects
}

/*




Build a basic NodeJS Server
https://github.com/deven1/assignment_build_a_nodejs_server
*/
