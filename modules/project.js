function Project(name, tech, link, image) {
  this.name = name;
  this.tech = tech;
  this.link = link;
  this.image = image;
}

var projects = [
          new Project("Node.js Hello World", "Node.js, JSON", "https://github.com/eglital/assignment_node_hello_world", "http://res.cloudinary.com/eglital/image/upload/c_scale,w_800/v1488518111/hello_node_dorfzf.png"),
          new Project("Async Node.js", "Node.js", "https://github.com/eglital/assignment_async_nodejs", "http://res.cloudinary.com/eglital/image/upload/c_scale,w_800/v1488517994/async_xks4th.png"),
          new Project("Build Node.js Server", "Node.js", "https://github.com/eglital/assignment_build_a_nodejs_server", "http://res.cloudinary.com/eglital/image/upload/c_scale,w_800/v1488518146/server_sgtfrx.png")
          ];

module.exports = {
  Project,
  projects
};