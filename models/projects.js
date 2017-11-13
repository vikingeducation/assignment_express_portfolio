
// utility funciton

let convertToCamelCase = (string) => {
  return string.split(' ').map((word) => {
    let wordArr = word.split('');
    wordArr[0] = wordArr[0].toUpperCase();
    return wordArr.join('');
  }).join('');
}

// Project Object

class Project {
  constructor(title, technologies, github_repo) {
    this.name = convertToCamelCase(title);
    this.title = title;
    this.technologies = technologies;
    this.description;
    this.github_repo = github_repo;
    this.sample;
  }
}

const projects = [
  new Project("Music player", ["JavaScript", "jQuery", "HTML", "CSS"], "https://github.com/JohnRPB/assignment_royalty_free_music_player"),
  new Project("Github API wrapper", ["JavaScript", "Github API"], "https://github.com/JohnRPB/assignment_githuh"),
  new Project("HTML resume", ["HTML"], "https://github.com/JohnRPB/assignment_html_resume")
];

module.exports = {
  Project, 
  projects
};
