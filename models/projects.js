class Project {
  constructor(name, displayName, gitHubUrl, imageUrl, ...technologies) {
    this.name = name;
    this.displayName = displayName;
    this.gitHubUrl = gitHubUrl;
    this.imageUrl = imageUrl;
    this.technologies = technologies;
  }
}

const projects = [
  new Project(
    "musicPlayer",
    "Music Player",
    "https://github.com/jenlouie/assignment_royalty_free_music_player",
    "/../images/free-music-player.PNG",
    "JavaScript", "JQuery", "CSS"),
  new Project(
    "basicNodeServer",
    "Basic Node.js Server",
    "https://github.com/jenlouie/assignment_build_a_nodejs_server",
    "/../images/build-node-server.PNG",
    "Node.js", "JavaScript"),
  new Project(
    "vikingCssGarden",
    "Viking CSS Garden",
    "https://github.com/jenlouie/assignment_viking_css_garden",
    "/../images/viking-css-garden.PNG",
    "CSS")
];

module.exports = {
  Project,
  projects
};
