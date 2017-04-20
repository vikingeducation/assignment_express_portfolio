class Project {
  constructor(name, id, technologies, link, image) {
    this.name = name;
    this.id = id;
    this.technologies = technologies;
    this.link = link;
    this.image = image;
  }
}

const projects = [
  new Project(
    "Royalty Free Music Player",
    "rfm_player",
    ["HTML", "CSS", "SASS", "JavaScript", "jQuery"],
    "https://github.com/christianflorez/assignment_royalty_free_music_player",
    "rfmplayer.jpg"
  ),
  new Project(
    "jQuery Snippets",
    "jquery_snippets",
    ["JavaScript"],
    "https://github.com/christianflorez/assignment_jq_ee_sprint",
    "jqsnippets.jpg"
  ),
  new Project(
    "Facebook CSS Clone",
    "facebook_clone",
    ["HTML", "CSS"],
    "https://github.com/christianflorez/project_prep_facebook_pages",
    "fbcss.jpg"
  ),
  new Project(
    "Viking CSS Garden",
    "viking_css_garden",
    ["HTML", "CSS"],
    "https://github.com/christianflorez/assignment_viking_css_garden",
    "cssgarden.jpg"
  )
];

module.exports = {
  Project,
  projects
}