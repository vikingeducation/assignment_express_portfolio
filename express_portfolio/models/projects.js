class Project {
  constructor(name, techs, link, imgs, description) {
    this.name = name;
    this.techs = techs;
    this.link = link;
    this.imgs = imgs;
    this.description = description;
  }
}

let projects = [
  new Project(
    'HTML Resume',
    ['HTML'],
    'https://github.com/Seeker0/assignment_html_resume',
    ['/images/html_resume.png'],
    'In this assignment we build and deploy our resume in HTML5. Compiling our resources into a resume and constructing a web page from it is a great step to get your name and qualifications out there in front of potential employers. Building this now is meant to jump start our portfolio and resume sites later!'
  ),
  new Project(
    'Viking CSS Garden',
    ['HTML', 'CSS'],
    'https://github.com/Seeker0/assignment_viking_css_garden',
    ['/images/Viking_Garden.png'],
    "The Viking CSS Garden is inspired by the CSS Zen Garden. The CSS Zen Garden is a project that allows front-end developers to submit their own designs and styling for the exact same markup. It's incredible the differences you see in the outcome of this exercise!"
  ),
  new Project(
    'Markup Warmup(refactor with SASS)',
    ['HTML', 'CSS', 'SASS'],
    'https://github.com/Seeker0/assignment_markup_warmup',
    ['/images/viking_blog.png'],
    "In this assignment we take a previous project that we've completed and refactor you CSS to use SASS."
  ),
  new Project(
    'Javascript Sprint',
    ['HTML', 'Javscript'],
    'https://github.com/Seeker0/assignment_js_sprint',
    ['/images/javascript_test_suite.png'],
    "In this assignment, we use our newly learned Javscript syntax to solve a series of logical challenges. We're provided a skeleton web page which allows us to test what we've written."
  ),
  new Project(
    'jQuery DOM Sprint',
    ['HTML', 'CSS', 'Javascript', 'jQuery'],
    'https://github.com/Seeker0/assignment_jq_dom_sprint',
    ['/images/jQuery_dom.png'],
    "In this project, we're given a simple HTML document and need to write a series of scripts which return or modify elements in it to cause the desired changes in the HTML page. The HTML cannot be edited. Only the Javscript"
  ),
  new Project(
    'jQuery Sprint(Form, DropDown, Photo Tagger)',
    ['HTML', 'CSS', 'SASS', 'Javscript', 'jQuery'],
    'https://github.com/Seeker0/assignment_jq_ee_sprint',
    ['/images/form_dropDown.png', '/images/photo_tagger.png'],
    'In this project, we used your newfound jQuery skills to pull together a couple of common DOM effects -- a form validation and a drop-down menu -- followed by some more advanced widgets like a photo tagger.'
  ),
  new Project(
    'Royalty Free Music Player',
    ['HTML', 'CSS', 'SASS', 'Javascript', 'jQuery'],
    'https://github.com/Seeker0/assignment_royalty_free_music_player',
    ['/images/rf_music_player.png'],
    "This project was our first full-fledged Javascript project. We're given mockups to replicate with HTML and CSS. And then add the appropriate Javascript to achieve the desired features."
  ),
  new Project(
    'Node.js Hello World',
    ['Javscript', 'Node.js'],
    'https://github.com/Seeker0/assignment_node_hello_world',
    ['/images/node_hello_world.png'],
    "Our first project using Node.js. We needed to build a logger module that created logged messages at 3 'levels' of importance."
  ),
  new Project(
    'Async Node.js',
    ['Javscript', 'Node.js'],
    'https://github.com/Seeker0/assignment_async_nodejs',
    ['/images/async_node.png'],
    'This project began with a warm up, building promise-based interfaces. Then we use promises to write promise based versions of common Node.js fs module functions. Lastly, we create our own implementation of the Node.js EventEmitter and implement it such that it can be switched out with the core Node.js version.'
  ),
  new Project(
    'Build a Node.js Server',
    ['HTML', 'Javscript', 'Node.js', 'Express.js'],
    'https://github.com/Seeker0/assignment_build_a_nodejs_server',
    ['/images/node_server1.png', '/images/node_server2.png'],
    'This project was our first chance to build our own basic Node.js server. It also serves an HTML page as well as dynamically inserts the data from the request and response objects.'
  )
];

module.exports = {
  Project,
  projects
};
