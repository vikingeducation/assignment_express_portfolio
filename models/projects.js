// Define Project class constructor
class Project {
  constructor(name, imgSrc, repoSrc, lang, description) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.repoSrc = repoSrc;
    this.lang = lang;
    this.description = description;
  }
}

// Instantiate each project in an array
const projects = [
  new Project("Royalty-Free Music Player", "../public/player.JPG", "https://github.com/jaredjgebel/assignment_royalty_free_music_player", "HTML, CSS, SASS, Javascript, jQuery", "Simple music player in the browser"),
  new Project("Sample Bootstrap Page", "../public/images/bootstrap.JPG", "https://github.com/jaredjgebel/assignment_bootstrap_sprint", "HTML, CSS, SASS, Bootstrap", "Recreate a sample bootstrap page with four breakpoints"),
  new Project("Facebook Lookalike", "../public/images/facebook.JPG", "https://github.com/jaredjgebel/project_prep_facebook_pages", "HTML, CSS, SASS, 960 Grid Template", "Recreate Facebook homepage, profile page, and friends page"),
  new Project("CSS Garden", "../public/images/garden.JPG", "https://github.com/jaredjgebel/assignment_viking_css_garden", "HTML, CSS")
];

module.exports = {
  Project,
  projects
};
