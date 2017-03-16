class Project {
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

const projects =
[
  new Project("Tracebook",
              "tracebook",
              "https://raw.githubusercontent.com/blackwright/tracebook/master/screenshots/cover.jpg",
              "Ruby on Rails, PostgreSQL, AJAX",
              "A social network clone",
              "Explore the app by logging in with one of many prepopulated accounts, or start from scratch with a blank guest account.",
              "http://tracebook.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/tracebook"),

  new Project("Tetris",
              "tetris",
              "https://raw.githubusercontent.com/blackwright/tetris/master/screenshots/cover.jpg",
              "JavaScript, jQuery, HTML5 Canvas",
              "The classic game implemented in JavaScript",
              "Use your arrow keys to move/rotate and hit space to drop down.",
              "https://blackwright.github.io/tetris/index.html",
              "Github Pages",
              "https://github.com/blackwright/tetris"),

  new Project("Dune Ipsum",
              "duneipsum",
              "https://raw.githubusercontent.com/blackwright/dune-ipsum/master/screenshots/cover.jpg",
              "Ruby, Sinatra",
              "A lorem ipsum generator based on Frank Herbert's Dune",
              "Paragraphs are built using a predetermined range of sentence structures, drawing from randomized word lists using different parts of speech. The user can choose how many paragraphs are rendered, up to a maximum of five. Buttons for copying to the clipboard and generating new passages are present.",
              "http://duneipsum.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/dune-ipsum"),

  new Project("What Have You Done?",
              "whyd",
              "https://raw.githubusercontent.com/blackwright/project_what_have_you_done/master/screenshots/cover.jpg",
              "Node.JS, Express",
              "A tool for checking up on your elected representatives",
              "Enter your zip code to list the representatives and senators for your area. Click on an individual to see his/her contact info and voting record.",
              "http://blackwright-whyd.herokuapp.com",
              "Heroku",
              "https://github.com/blackwright/project_what_have_you_done"),

  new Project("Blackjack",
              "blackjack",
              "https://raw.githubusercontent.com/blackwright/blackjack/master/screenshots/cover.jpg",
              "Ruby, Sinatra",
              "A game of 21 implemented with Ruby and Sinatra",
              "The player starts with $1000 and must get as close to 21 as possible without going over (bust). Cards are rendered dynamically through CSS as partials.",
              "http://blackwright-blackjack.herokuapp.com/",
              "Heroku",
              "https://github.com/blackwright/blackjack")
];

module.exports = { Project, projects };
