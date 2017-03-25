class Project {
  constructor(name, tagline, longDesc, techUsed, imgSource, gitURL) {
    this.name = name
    this.shortDesc = tagline
    this.longDesc = longDesc
    this.techUsed = techUsed
    this.imgSource = imgSource
    this.gitURL = gitURL
  }
}

const projects = [
  new Project("Asynchronous Node.js Practice",
    "Promises, promises...",
    "This practice exercise had me working out the asynchronous nature of JavaScript and building an event emitter from scratch.",
    "JavaScript, Node",
    "../images/asyncnode.png",
    "https://github.com/Throw22/assignment_async_nodejs"),
  new Project("GitHuh",
    "Gitting gud at API calls",
    "Being able to talk to other websites and apps is huge, and that's what this assignment was all about. After digging around in GitHub's API docs, I built a tool to collect information about users you search for.",
    "JavaScript, Node",
    "../images/githuh.png",
    "https://github.com/Throw22/assignment_githuh"),
  new Project("Node Server",
    "Req, res, and start again",
    "The front end is getting more powerful every day, but the best apps still need to offload their work on servers. This assignment was an introduction to setting up a webpage that talks to server, and how they share information back and forth between them.",
    "JavaScript, Node",
    "../images/nodeserver.png",
    "https://github.com/Throw22/assignment_node_hello_world"),
  new Project("Hello, Colorful World!",
    "Haven't used Chalk since I was a kid",
    "This assignment gave me a chance to try out pre-existing Node modules (like Chalk) and build my own. But this is only the beginning!",
    "JavaScript, Node",
    "../images/hellocolorfulworld.png",
    "https://github.com/Throw22/assignment_build_a_nodejs_server"),
  new Project("The Royalty Free Music Player",
    "Bad music, great practice",
    "This project allowed me to tie all my JQuery learning together. I built a music player that users can interact with, and that updates intuitively using JQuery's traversal mechanics.",
    "JavaScript, JQuery",
    "../images/musicplayer.png",
    "https://github.com/Throw22/assignment_royalty_free_music_player"),
  new Project("JQuery Practice",
    "Tag your friends!",
    "Events and animations on webpages make them infinitely more engaging when used correctly, so this assignment had me building some standard form events and fun Facebook-style tagging systems. ",
    "HTML, CSS, JavaScript, JQuery",
    "../images/photodropdown.png",
    "https://github.com/Throw22/assignment_jq_ee_sprint"),
  new Project("Bootstrap Sprint",
    "These boots were made for strappin'",
    "Bootstrap has made quickly putting together clean, interesting sites a snap. For this assignment I recreated one of Bootstrap's own demo pages so that I could get a better idea of how all its pieces fit together.",
    "HTML, CSS",
    "../images/bootstrap.png",
    "https://github.com/Throw22/assignment_bootstrap_sprint"),
  new Project("Facelook",
    "Remember when it was called 'The' Facelook?",
    "Sometimes imitation is the best way to learn! For this project I recreated a few of Facebook's iconic pages to solidify my HTML and CSS skills.",
    "HTML, CSS",
    "../images/facelook.png",
    "https://github.com/Throw22/project_prep_facebook_pages"),
  new Project("The Viking CSS Garden",
    "It's always spring on the Internet",
    "Just like the famous CSS Garden exercise, this assignment had me touching ONLY the CSS on a webpage and gave me the freedom to style it however I liked.",
    "HTML, CSS",
    "../images/cssgarden.png",
    "https://github.com/Throw22/assignment_viking_css_garden")
]

module.exports = {
  Project,
  projects
}
