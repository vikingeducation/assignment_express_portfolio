function Project(name, param, tech, img, url, desc) {
  this.name = name;
  this.param = param;
  this.tech = tech;
  this.img = img;
  this.url = url;
  this.desc = desc;
};

const projects = [
  new Project(
    'Royalty Free Music Player',
    'royalty-free-music-player',
    [
      'HTML',
      'CSS/SCSS',
      'Javascript',
    ],
    'images/music-player.png',
    'https://github.com/ksc23/assignment_royalty_free_music_player'
  ),
  new Project(
    'Twitch Viewer',
    'twitch-viewer',
    [
      'HTML',
      'CSS/SCSS',
      'Javascript',
      'Twitch.tv API',
    ],
    'images/twitch-viewer.png',
    'https://github.com/ksc23/twitch-viewer'
  ),
  new Project(
    'Wikipedia Viewer',
    'wikipedia-viewer',
    [
      'HTML',
      'CSS/SCSS',
      'Javascript',
      'Wikipedia API',
    ],
    'images/wiki-viewer.png',
    'https://github.com/ksc23/wikipedia-viewer'
  ),
  new Project(
    'Random Quote Machine',
    'random-quote-machine',
    [
      'HTML',
      'CSS/SCSS',
      'Javascript',
      'Forismatic API',
    ],
    'images/random-quote-machine.png',
    'https://github.com/ksc23/random-quote-machine'
  )
];

module.exports = {
  Project,
  projects
};
