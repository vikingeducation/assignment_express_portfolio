class Project {
  constructor(name, projectUrl, desc, tech, image, deployedUrl, github) {
    this.name = name;
    this.projectUrl = projectUrl;
    this.desc = desc;
    this.tech = tech;
    this.image = image;
    this.deployedUrl = deployedUrl;
    this.github = github;
  }
}

const projects =
[
  new Project("Tracebook",
              "tracebook",
              "A social network clone",
              "Ruby on Rails, PostgreSQL, AJAX",
              "https://raw.githubusercontent.com/blackwright/tracebook/master/screenshots/cover.jpg",
              "http://tracebook.herokuapp.com",
              "https://github.com/blackwright/tracebook"),

  new Project("Tetris",
              "tetris",
              "The classic game implemented in JavaScript",
              "JavaScript, jQuery, HTML5 Canvas",
              "https://raw.githubusercontent.com/blackwright/tetris/master/screenshots/cover.jpg",
              "https://blackwright.github.io/tetris/index.html",
              "https://github.com/blackwright/tetris"),

  new Project("Dune Ipsum",
              "dune-ipsum",
              "A lorem ipsum generator based on Frank Herbert's Dune",
              "Ruby, Sinatra",
              "https://raw.githubusercontent.com/blackwright/dune-ipsum/master/screenshots/cover.jpg",
              "http://duneipsum.herokuapp.com",
              "https://github.com/blackwright/dune-ipsum"),

  new Project("What Have You Done?",
              "whyd",
              "A tool for checking up on your elected representatives",
              "Node.JS, Express",
              "https://raw.githubusercontent.com/blackwright/project_what_have_you_done/master/screenshots/cover.jpg",
              "http://blackwright-whyd.herokuapp.com",
              "https://github.com/blackwright/project_what_have_you_done"),

  new Project("Blackjack",
              "blackjack",
              "A game of 21 implemented with Ruby and Sinatra",
              "Ruby, Sinatra",
              "https://raw.githubusercontent.com/blackwright/blackjack/master/screenshots/cover.jpg",
              "http://blackwright-blackjack.herokuapp.com/",
              "https://github.com/blackwright/blackjack")
];

module.exports = { Project, projects };
