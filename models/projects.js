class Project {
  constructor(title, repo, image, ...tech) {
    this.title = title;
    this.repo = repo;
    this.image = image;
    this.tech = tech;
  }
}

const projects = [
  new Project(
    "Facebook",
    "https://github.com/ke2uke/project_prep_facebook_pages",
    "../public/images/facebook.png",
    "HTML", "CSS"
  ),
  new Project(
    "Bootstrap",
    "https://github.com/ke2uke/assignment_bootstrap_sprint",
    "../public/images/bootstrap.png",
    "HTML", "CSS", "Bootstrap"
  ),
  new Project(
    "Royalty Free Music Player",
    "https://github.com/ke2uke/assignment_royalty_free_music_player",
    "../public/images/player.png",
    "HTML", "CSS", "Javascript", "JQuery"
  )
];

module.exports = {
  Project,
  projects
}
