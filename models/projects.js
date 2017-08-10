class Project {
  constructor(name, slug, repo, imageThumb, imageSplash, ...technologies) {
    this.name = name;
    this.slug = slug;
    this.repo = repo;
    this.imageThumb = imageThumb;
    this.imageSplash = imageSplash;
    this.technologies = technologies;
  };
}

const projects = [
  new Project("Odin and Friends", 'odin_and_friends', "https://github.com/lortza/odin_and_friends", 'http://via.placeholder.com/200x200', 'http://via.placeholder.com/700x300', 'javascript', 'node', 'handlebars', 'express'),
  new Project('Express Hello World', 'express_hello_world', 'https://github.com/lortza/express_hello', 'http://via.placeholder.com/200x200', 'http://via.placeholder.com/700x300', 'javascript', 'node', 'handlebars', 'express', 'heroku'),
  new Project('First Node Server', 'first_node_server', 'https://github.com/lortza/assignment_build_a_nodejs_server', 'http://via.placeholder.com/200x200', 'http://via.placeholder.com/700x300', 'javascript', 'node'),
  new Project('Royalty Free Music Player', 'royalty_free_music_player', 'https://github.com/lortza/assignment_royalty_free_music_player', 'http://via.placeholder.com/200x200', 'http://via.placeholder.com/700x300', 'jQuery', 'javascript', 'html', 'css', 'sass'),
  new Project('To Do List Lite', 'to_do_list_lite', 'https://github.com/lortza/todolistlite', 'http://via.placeholder.com/200x200', 'http://via.placeholder.com/700x300', 'html', 'css', 'jQuery', 'javascript')
];

module.exports = {
  Project,
  projects
};