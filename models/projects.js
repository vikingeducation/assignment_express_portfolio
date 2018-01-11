function Project(name, param, tech) {
  this.name = name;
  this.param = param;
  this.tech = tech;
};

const projects = [
  new Project(
    'Royalty Free Music Player',
    'royalty-free-music-player',
    [
      'HTML',
      'CSS/SCSS',
      'Javascript',
    ]
  ),
  new Project(
    'Twitch Viewer',
    'twitch-viewer',
    [
      'HTML',
      'CSS/SCSS',
      'Javascript',
      'Twitch.tv API',
    ]
  ),
  new Project(
    'Wikipedia Viewer',
    'wikipedia-viewer',
    [
      'HTML',
      'CSS/SCSS',
      'Javascript',
      'Wikipedia API',
    ]
  ),
  new Project(
    'Random Quote Machine',
    'random-quote-machine',
    [
      'HTML',
      'CSS/SCSS',
      'Javascript',
      'Forismatic API',
    ])
];

module.exports = {
  Project,
  projects
};
