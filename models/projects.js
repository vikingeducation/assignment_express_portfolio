class Project {
	constructor(name, technologies, img_url, url, github, description){
		this.name = name;
		this.technologies = technologies;
		this.img_url = img_url;
		this.url = url;
		this.github = github;
		this.description = description;
	}
}

const projects = [
	new Project(
		"Tic Tac Toe", 
		["HTML", "CSS", "JQuery", "Javascript"], 
		"http://i.imgur.com/6F80elK.png?1", 
		"tictactoe", 
		"https://github.com/thrashmaniac890/Jquery-Tic-Tac-Toe",
		"A fully functional tic tac toe game using Javascript and Jquery. On top of playing two-player mode,you have the option of playing an advanced AI and updating the game's look and feel in-game."
		),

	new Project(
		"Pomo Clock App", 
		["D3, HTML5, Javascript, JQuery"],
		"http://i.imgur.com/WREvuPA.png?1",
		 "pomo_app", 
		 "https://github.com/thrashmaniac890/Pomodoro-Clock-App",
		"A simple pomodoro clock app that tracks how many pomodoros you've worked based on day, week, and month."
		),

	new Project(
		"Landing Page", 
		["CSS", "HTML","SCSS"], 
		"http://i.imgur.com/GvuUyyc.png",
		"landing_page", 
		"https://github.com/thrashmaniac890/landing_page",
		"A fully responsive landing page using Foundation."
		),

	new Project(
		"Royalty Free Player",
		["CSS", "HTML", "JQuery", "Javascript"], 
		"http://i.imgur.com/vUThlvt.png?1",
		"royalty_free_player",
		"https://github.com/thrashmaniac890/royalty_free_player",
		"A music player specially designed for royalty free music. In addition to playing music, you can add and delete your own song additions."
		)
]

module.exports = {
	Project,
	projects
}

