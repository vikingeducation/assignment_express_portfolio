var snakeCase = require('snake-case');

class Project {
  constructor(name, techs, link, imagePath) {
    this.name = name;
    this.techs = techs;
    this.link = link;
    this.imagePath = imagePath;
    this.nameUrl = snakeCase(name);
  }
};

const projects = [
  var roMuPl = new Project("Royalty-Free Music Player", "HTML, SASS, CSS, JavaScript, JQuery", "https://github.com/IDHalverson/assignment_royalty_free_music_player", "/images/Royalty.png"),
  var viCsGa = new Project("Viking CSS Garden", "HTML, SASS, CSS", "https://github.com/IDHalverson/assignment_viking_css_garden", "/images/Garden.png"),
  var boSp = new Project("Bootstrap Sprint", "HTML, CSS, Bootstrap", "https://github.com/IDHalverson/assignment_bootstrap_sprint", "/images/Bootstrap.png"),
  var prPrFaPa = new Project("Project Prep Facebook Pages", "HTML, CSS", "https://github.com/IDHalverson/project_prep_facebook_pages", "/images/Facebook.png"),
  var jsSp = new Project("JS Sprint", "JavaScript", "https://github.com/IDHalverson/assignment_js_sprint", "/images/Javascript.png"),
  var jqDoSp = new Project("JQuery DOM Sprint", "HTML, CSS, Javascript, JQuery", "https://github.com/IDHalverson/assignment_jq_dom_sprint", "/images/DOM.png"),

];

module.exports = {
  Project,
  projects
}
