var snakeCase = require('snake-case');

class Project {
  constructor(name, techs, description, link, imagePath) {
    this.name = name;
    this.techs = techs;
    this.description = description;
    this.link = link;
    this.imagePath = imagePath;
    this.nameUrl = snakeCase(name);
  }
};

const projects = [
  new Project("Royalty-Free Music Player", "HTML, SASS, CSS, JavaScript, JQuery", "This project allowed me to explore all of the amazing functionality of JQuery. It was also a great exercise in de-bugging, as I dealt with the nuances of switching/resetting tracks, and ensuring no combination of actions could break the programming flow.", "https://github.com/IDHalverson/assignment_royalty_free_music_player", "/images/Royalty.png"),
  new Project("Viking CSS Garden", "HTML, SASS, CSS", "Viking CSS Garden was an exciting project, as it was one of my first utilizing full-featured CSS. Getting to see a static website develop from pure HTML into a blossoming flower of styles was invigorating to say the least.", "https://github.com/IDHalverson/assignment_viking_css_garden", "/images/Garden.png"),
  new Project("Bootstrap Sprint", "HTML, CSS, Bootstrap", "It was incredible to see how effective Bootstrap is at providing profesionally styled websites, which could easily be customized for a specific need. This project was not only fun, but opened up a world of possibilities in my mind for future developing.", "https://github.com/IDHalverson/assignment_bootstrap_sprint", "/images/Bootstrap.png"),
  new Project("Project Prep Facebook Pages", "HTML, CSS", "This project was a huge muscle-flexer in both CSS and HTML. It allowed me to learn (through experience) a lot about organizing code well, re-using code/styling on multiple pages, and using CSS classes versus IDs. It kinda makes want to start my own Facebook.com!", "https://github.com/IDHalverson/project_prep_facebook_pages", "/images/Facebook.png"),
  new Project("JS Sprint", "JavaScript", "This project was my first big obstacle in Javascript. It's hard to describe how great it was to see all of my functions produce the correct result. This exercise was definitely a factor in my decision to stick with learning web development.", "https://github.com/IDHalverson/assignment_js_sprint", "/images/Javascript.png"),
  new Project("JQuery DOM Sprint", "HTML, CSS, Javascript, JQuery", "Although this was a small project, it was exciting to see that you could manipulate the DOM in such a variety of ways. This exercise gave me a lot of confidence in moving forward with learning JQuery.", "https://github.com/IDHalverson/assignment_jq_dom_sprint", "/images/DOM.png"),

];

module.exports = {
  Project,
  projects
}
