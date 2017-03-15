class Project {
  constructor(name, projectUrl, cover,
              tech, desc,
              deployedUrl, host, github) {
    this.name = name;
    this.projectUrl = projectUrl;
    this.desc = desc;
    this.tech = tech;
    this.cover = cover;
    this.deployedUrl = deployedUrl;
    this.host = host;
    this.github = github;
  }
}

const projects =
[
  new Project("Tracebook",
              "tracebook",
              "https://raw.githubusercontent.com/blackwright/tracebook/master/screenshots/cover.jpg",
              "Ruby on Rails, PostgreSQL, AJAX",
              "A social network clone.",
              "http://tracebook.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/tracebook"),

  new Project("Tetris",
              "tetris",
              "https://raw.githubusercontent.com/blackwright/tetris/master/screenshots/cover.jpg",
              "JavaScript, jQuery, HTML5 Canvas",
              "The classic game implemented in JavaScript.",
              "https://blackwright.github.io/tetris/index.html",
              "Github Pages",
              "https://github.com/blackwright/tetris"),

  new Project("Dune Ipsum",
              "dune-ipsum",
              "https://raw.githubusercontent.com/blackwright/dune-ipsum/master/screenshots/cover.jpg",
              "Ruby, Sinatra",
              "A lorem ipsum generator based on Frank Herbert's Dune.",
              "http://duneipsum.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/dune-ipsum"),

  new Project("What Have You Done?",
              "whyd",
              "https://raw.githubusercontent.com/blackwright/project_what_have_you_done/master/screenshots/cover.jpg",
              "Node.JS, Express",
              "A tool for checking up on your elected representatives.",
              "http://blackwright-whyd.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/project_what_have_you_done"),

  new Project("Blackjack",
              "blackjack",
              "https://raw.githubusercontent.com/blackwright/blackjack/master/screenshots/cover.jpg",
              "Ruby, Sinatra",
              "A game of 21 implemented with Ruby and Sinatra.",
              "http://blackwright-blackjack.herokuapp.com/",
              "Heroku",
              "https://github.com/blackwright/blackjack")
];

module.exports = { Project, projects };
