"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function Project(name, displayName, gitHubUrl, imageUrl) {
  _classCallCheck(this, Project);

  this.name = name;
  this.displayName = displayName;
  this.gitHubUrl = gitHubUrl;
  this.imageUrl = imageUrl;

  for (var _len = arguments.length, technologies = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    technologies[_key - 4] = arguments[_key];
  }

  this.technologies = technologies;
};

var projects = [new Project("musicPlayer", "Music Player", "https://github.com/jenlouie/assignment_royalty_free_music_player", "/../images/free-music-player.PNG", "JavaScript", "JQuery", "CSS"), new Project("basicNodeServer", "Basic Node.js Server", "https://github.com/jenlouie/assignment_build_a_nodejs_server", "/../images/build-node-server.PNG", "Node.js", "JavaScript"), new Project("vikingCssGarden", "Viking CSS Garden", "https://github.com/jenlouie/assignment_viking_css_garden", "/../images/viking-css-garden.PNG", "CSS")];

module.exports = {
  Project: Project,
  projects: projects
};
//# sourceMappingURL=projects.js.map