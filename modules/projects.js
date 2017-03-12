class Project {
  constructor(name, desc, image, url, github) {
    this.name = name;
    this.desc = desc;
    this.image = image;
    this.url = url;
    this.github = github;
  }
}

const projects =
[
  new Project("Tracebook",
              "A social network clone built with Ruby on Rails",
              "https://raw.githubusercontent.com/blackwright/tracebook/master/screenshots/welcome.jpg",
              "http://tracebook.herokuapp.com",
              "https://github.com/blackwright/tracebook")
];

module.exports = { Project, projects };
