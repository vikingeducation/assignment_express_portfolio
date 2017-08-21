class Project {
  constructor(name, gitHub, img1, img2, ...technologies) {
    this.name = name;
    this.gitHub = gitHub;
    this.img1 = img1;
    this.img2 = img2;
    this.technologies = technologies;
  }
};

const projectData = [
  new Project(
    "assignment_jq_ee_sprint",
    "https://github.com/coelacanth7/assignment_jq_ee_sprint",
    "http://i.imgur.com/ILVv9Hz.png",
    "http://i.imgur.com/1Vnf4TW.png",
    "html", "css", "javascript", "jquery"
  ),
  new Project(
    "assignment_royalty_free_music_player",
    "https://github.com/coelacanth7/assignment_royalty_free_music_player",
    "http://i.imgur.com/JErdWbk.png",
    "http://i.imgur.com/VIrjVHZ.png",
    "html", "css", "bootstrap", "javascript", "jquery"
  ),
  new Project(
    "assignment_js_sprint",
    "https://github.com/coelacanth7/assignment_js_sprint",
    "http://i.imgur.com/b7IlEFp.png",
    "http://i.imgur.com/QX8Xw8O.png",
    "javascript"
  )
];

module.exports = {
  Project,
  projectData
};
