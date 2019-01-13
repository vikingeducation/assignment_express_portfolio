function Project(name, techs, link, img){
    this.name = name;
    this.techs = techs;
    this.link = link;
    this.img = img;
};

const projects = [
  new Project("project1", ["javascript", "Express"], "www.asdf.com", "http://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-md.png"),
  new Project("project2", ["javascript2", "Express2"], "www.asdf22.com", "http://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-md.png")
];

module.exports = {Project, projects};
