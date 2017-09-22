// Define Project class constructor
class Project {
  constructor(name, imgSrc, repoSrc, lang, description) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.repoSrc = repoSrc;
    this.lang = lang;
    this.description = description;
    this.path = "/projects/" + encodeURIComponent(name);
  }
}

// Instantiate each project in an arrays
// Files are referenced from root of app (app.js)
const projects = [
  new Project("Royalty-Free Music Player", "/images/player.JPG", "https://github.com/jaredjgebel/assignment_royalty_free_music_player", "HTML, CSS, SASS, Javascript, jQuery, Git", "Simple music player in the browser"),
  new Project("Sample Bootstrap Page", "/images/bootstrap.JPG", "https://github.com/jaredjgebel/assignment_bootstrap_sprint", "HTML, CSS, SASS, Bootstrap, Git", "Recreate a sample bootstrap page with four breakpoints"),
  new Project("Facebook Lookalike", "/images/facebook.JPG", "https://github.com/jaredjgebel/project_prep_facebook_pages", "HTML, CSS, SASS, 960 Grid Template, Git", "Recreate Facebook homepage, profile page, and friends page"),
  new Project("CSS Garden", "/images/garden.JPG", "https://github.com/jaredjgebel/assignment_viking_css_garden", "HTML, CSS, Git", "Styled a given HTML template with straight CSS")
];

module.exports = {
  Project,
  projects
};
