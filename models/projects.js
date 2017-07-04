'use strict';

class Project {
  constructor(name, tech, repo, images, summary) {
    this.name = name;
    this.tech = tech;
    this.repo = repo;
    this.images = images;
    this.summary = summary;
  }
}

const projects = [
  new Project(
    'HTML5 Resume',
    ['HTML5'],
    'https://github.com/thebopshoobop/assignment_html_resume',
    ['html5_resume.png'],
    'A resume outline (no styling) that is built with HTML5 semantic elements like <header>, <section>, and <article>'
    ),

  new Project(
    'Facebook Pages',
    ['HTML5', 'CSS3'],
    'https://github.com/thebopshoobop/project_prep_facebook_pages',
    ['facebook_feed.png', 'facebook_about.png'],
    'A static Facebook lookalike built with modern markup tools.'
  ),

  new Project(
    'Viking CSS Garden',
    ['HTML5', 'CSS3', 'Sass'],
    'https://github.com/thebopshoobop/assignment_viking_css_garden',
    ['viking_garden_wide.png', 'viking_garden_narrow.png'],
    'A CSS garden built to show the power of CSS (in this case built with Sass) for creating beautiful pages from prebuilt (well-structured) HTML.'
  ),

  new Project(
    'Bootstrap Jumbotron',
    ['HTML5', 'CSS3', 'Bootstrap'],
    'https://github.com/thebopshoobop/assignment_bootstrap_sprint',
    ['bootstrap_wide.png', 'bootstrap_narrow.png'],
    'A reimplementation of the Bootstrap Jumbotron example page using HTML5 semantic tags.'
  ),

  new Project(
    'Roulette',
    ['JavaScript'],
    'https://github.com/thebopshoobop/assignment_js_sprint',
    ['roulette.png'],
    'A roulette game module.'
  ),

  new Project(
    'Build jQuery',
    ['JavaScript', 'jQuery'],
    'https://github.com/thebopshoobop/assignment_build_jquery',
    ['jquery.png'],
    'An implementation of a subset of the jQuery core functionality: selection, adding and removing classes, adding and removing attributes and css properties, getting and setting element values, and implicit iteration.'
  ),

  new Project(
    'Royalty-Free Music Player',
    ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Sass'],
    'https://github.com/thebopshoobop/assignment_royalty_free_music_player',
    ['rfmp.png'],
    'A web-based music player built with jQuery and HTML5 audio.'
  ),

  new Project(
    'Filesystem Promises',
    ['JavaScript', 'Node.js', 'Promises'],
    'https://github.com/thebopshoobop/assignment_async_nodejs',
    ['fsp.png'],
    'A Promise wrapper for a subset of the Node.js fs module.'
  ),

  new Project(
    'Node.js Web Server',
    ['JavaScript', 'Node.js'],
    ['node_get.png', 'node_post.png'],
    'A Simple web server that displays some information about the requests that it recieves.'
  )

];

module.exports = {projects: projects};
