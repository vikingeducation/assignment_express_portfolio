"use strict";
// Constructor for a project
function Project(id, image, title, shortDes, githubRepo, techUsedArr) {
  this.id = id;
  this.image = image;
  this.title = title;
  this.shortDes = shortDes;
  this.githubRepo = githubRepo;
  this.techUsedArr = techUsedArr;
}


// Legislator Project
let p1 = new Project(
  "p1",
  "/assets/images/what-have-you-done.png",
  "Find Local Legislators",
  "An application that allows the user to find their local legislators by zipcode and investigate a legislator's current bill history. This app was built with node paired with the express framework and handlebars.",
  "https://github.com/Alex-Willenbrink/project_what_have_you_done",
  ["Javascript", "Express", "Handlebars", "CSS", "HTML", "SASS", "Bootstrap"]
);

// Royalty Free Music Player Project
let p2 = new Project(
  "p2",
  "/assets/images/royalty-free-music-player.png",
  "Music Player",
  "An application utilizing jQuery to play your favorite music! Finding the source of each sound file and embed the file into the html to your delight!",
  "https://github.com/Alex-Willenbrink/assignment_royalty_free_music_player",
  ["Javascript", "jQuery", "SASS", "CSS", "HTML"]
);

// Bootstrap Mirror Project
let p3 = new Project(
  "p3",
  "/assets/images/bootstrap-jumbotron-mirror.png",
  "Bootstrap Demonstration",
  "A webpage that utilizes many of the important aspects of bootstrap (mainly jumbotron) to increase bootstrap familiarity.",
  "https://github.com/Alex-Willenbrink/assignment_bootstrap_sprint",
  ["Bootstrap", "SASS", "CSS", "HTML"]
);

// Facebook Mirror Project
let p4 = new Project(
  "p4",
  "/assets/images/facebook-mirror.png",
  "Facebook Mirror",
  "A mirror of the facebook login and about page.",
  "https://github.com/Alex-Willenbrink/project_prep_facebook_pages",
  ["SASS", "CSS", "HTML"]
);

let projectInfo = [p1, p2, p3, p4];
module.exports = projectInfo;
