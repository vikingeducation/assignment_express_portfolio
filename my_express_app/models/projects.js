class Project{
  constructor(name, technologies, git_link, project_img){
    this.name = name;
    this.technologies = technologies;
    this.git_link = git_link;
    this.project_img = project_img;
  }
}

var projects =
        [new Project("assignment_js_sprint", ["javascript"], "https://github.com/lakshmi2812/assignment_js_sprint", "../images/assignment_js_sprint-index-html.png"),
         new Project("assignment_jq_dom_sprint", ["javascript", "jquery"], "https://github.com/lakshmi2812/assignment_jq_dom_sprint", "../images/assignment_jq_dom_sprint.png"),
         new Project("assignment_jq_ee_sprint", ["javascript", "jquery"], "https://github.com/lakshmi2812/assignment_jq_ee_sprint", "../images/assignment_jq_ee_sprint")
      ];

module.exports = {Project,
                  projects};
