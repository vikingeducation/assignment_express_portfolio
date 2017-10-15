function Project(name, technologies, imageUrl, url) {
  this.name = name;
  this.technologies = technologies;
  this.image = imageUrl;
  this.url = url;
}

var projects = [
  new Project("Project Danebook",
              ["Ruby", "Rails", "HTML", "CSS", "RSpec", "PostreSQL"],
              "./public/images/danebook.png",
              'https://github.com/Visiona/project_danebook'),
  new Project("Mastermind Game CLI",
              ["Ruby", "Bash CLI"],
              "./public/images/mastermind.png",
              "https://github.com/Visiona/project_cli_mastermind"),
  new Project("Knights Travails",
                ["Ruby", "Depth Search Algorythm", "Broad Search Algorythm", "Bash CLI"],
                "./public/images/knights_travail.png",
                "https://github.com/Visiona/assignment_knights_travails/blob/master/knight_searcher.rb"),
  new Project("Sinatra Dashboard",
              ["Ruby", "Sinatra", "Mechanize Gem", "Glassdoor API"],
                "./public/images/sinatra_dashboard.png",
              "https://github.com/Visiona/project_sinatra_dashboard"),
  new Project("Viking Store",
              ["Ruby", "Rails", "PostreSQL"],
              "./public/images/viking_store.png",
              "https://github.com/Visiona/project_viking_store"),
  new Project("Survey Build or Fill",
              ["Ruby", "Rails", "PostreSQL"],
              "./public/images/surveyor.png",
            "https://github.com/Visiona/project_surveyor"),
  new Project("Tetris on CLI",
              ["Ruby", "Bash"],
              "./public/images/tetris.png",
              "https://github.com/Visiona/project_cli_tetris"),
  new Project("Royalty Free Music Player",
              ["HTML", "SCSS", "JavaScript", "jQuery"],
              "./public/images/music_player.png",
              "https://github.com/Visiona/assignment_royalty_free_music_player"),
  new Project("Connect Four with AI on CLI",
              ["Ruby", "Bash"],
              "./public/images/connect_four.png",
              "https://github.com/Visiona/project_cli_connect_four/tree/master/connect_four"),
]
