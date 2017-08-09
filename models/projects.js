class Project {
  constructor(name, repo, imageFile, ...technologies) {
    this.name = name;
    this.repo = repo;
    this.imageFile = imageFile;
    this.technologies = technologies;
  };
}

const projects = [
  new Project("Odin and Friends", "https://github.com/lortza/odin_and_friends", "http://via.placeholder.com/200x200", 'javascript', 'node', 'handlebars', 'express'),
  new Project('Express Hello World', 'https://github.com/lortza/express_hello', 'http://via.placeholder.com/200x200', 'javascript', 'node', 'handlebars', 'express', 'heroku'),
  new Project('First Node Server', 'https://github.com/lortza/assignment_build_a_nodejs_server', 'http://via.placeholder.com/200x200', 'javascript', 'node'),
  new Project('Royalty Free Music Player', 'https://github.com/lortza/assignment_royalty_free_music_player', 'http://via.placeholder.com/200x200', 'jQuery', 'javascript', 'html', 'css', 'sass'),
  new Project('To Do List Lite', 'https://github.com/lortza/todolistlite', 'http://via.placeholder.com/200x200', 'html', 'css', 'jQuery', 'javascript')
];

module.exports = {
  Project,
  projects
};