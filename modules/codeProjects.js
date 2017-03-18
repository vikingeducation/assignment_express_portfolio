class CodeProject {
  constructor(name, projectUrl, cover,
              tech, desc, descLong,
              deployedUrl, host, github) {
    this.name = name;
    this.projectUrl = projectUrl;
    this.desc = desc;
    this.descLong = descLong;
    this.tech = tech;
    this.cover = cover;
    this.deployedUrl = deployedUrl;
    this.host = host;
    this.github = github;
  }
}

const codeProjects =
[
  new CodeProject("Asteroids",
              "asteroids",
              "https://raw.githubusercontent.com/blackwright/asteroids/master/screenshots/cover.jpg",
              "JavaScript, jQuery, HTML5 Canvas",
              "The classic game implemented with JavaScript",
              "Use your arrow keys to accelerate/rotate and hit space to fire.",
              "https://blackwright.github.io/asteroids/index.html",
              "Github Pages",
              "https://github.com/blackwright/asteroids"),

  new CodeProject("Tracebook",
              "tracebook",
              "https://raw.githubusercontent.com/blackwright/tracebook/master/screenshots/cover.jpg",
              "Ruby on Rails, PostgreSQL, AJAX",
              "A social network clone",
              "Create posts, leave comments, upload photos, make friends, and like content. Explore the app by creating an account or using one of many prepopulated accounts.",
              "http://tracebook.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/tracebook"),

  new CodeProject("Tetris",
              "tetris",
              "https://raw.githubusercontent.com/blackwright/tetris/master/screenshots/cover.jpg",
              "JavaScript, jQuery, HTML5 Canvas",
              "The classic game implemented with JavaScript",
              "Use your arrow keys to move/rotate and hit space to drop down.",
              "https://blackwright.github.io/tetris/index.html",
              "Github Pages",
              "https://github.com/blackwright/tetris"),


  new CodeProject("Blackjack",
              "blackjack",
              "https://raw.githubusercontent.com/blackwright/blackjack/master/screenshots/cover.jpg",
              "Ruby, Sinatra",
              "A game of 21 implemented with Ruby and Sinatra",
              "The player starts with $1000. Win by getting as close to 21 as possible without going over (bust). Good luck!",
              "http://blackwright-blackjack.herokuapp.com/",
              "Heroku",
              "https://github.com/blackwright/blackjack"),

  new CodeProject("What Have You Done?",
              "whyd",
              "https://raw.githubusercontent.com/blackwright/project_what_have_you_done/master/screenshots/cover.jpg",
              "Node.JS, Express",
              "A tool for checking up on your elected representatives",
              "Fetches data from the Sunlight Congress API to display contact and voting record information.",
              "http://blackwright-whyd.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/project_what_have_you_done"),

  new CodeProject("Dune Ipsum",
              "duneipsum",
              "https://raw.githubusercontent.com/blackwright/dune-ipsum/master/screenshots/cover.jpg",
              "Ruby, Sinatra",
              "Lorem ipsum generator",
              "Dynamically generate paragraphs of placeholder text using vocabulary and phrases from Frank Herbert's Dune.",
              "http://duneipsum.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/dune-ipsum")
];

module.exports = { CodeProject, codeProjects };
