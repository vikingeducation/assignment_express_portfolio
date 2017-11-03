class Project {
  constructor (name, tech, link, image, description) {
    this.name = name;
    this.tech = tech;
    this.link = link;
    this.image = image;
    this.description = description;
  }
}

const projects = [
  new Project ('Porfolio', 'Node.js, Express, Handlebars', 'https://github.com/memyselfandhai/assignment_express_portfolio', '',
    "Come back for more updates as I level up! More cool stuff to come! [Difficulty: 4/5]" ),
  new Project('jQuery Sprint', 'jQuery, JavaScript', 'https://github.com/memyselfandhai/assignment_jq_ee_sprint', 'assets/jq_sprint.png',
    "Charmander was always my favorite. [Difficulty: 3/5]"),
  new Project ('HTML Resume', "HTML", 'https://github.com/memyselfandhai/assignment_html_resume', 'assets/jq_sprint.png',
    "Very ugly, but you've gotta start somewhere right? [Difficulty: 1/5]")
]


module.exports = {
  Project, projects
}
