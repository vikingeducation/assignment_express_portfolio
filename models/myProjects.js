//for each new project, simply create a new object in myProjects array below
//{"id":"", "name": "", desc":"", "techused":"", gitlink":"", "imagelink":""}
var myProjects = [
{"id":"portfolio", "name":"Personal Portfolio", "desc":"cool stuff I've made", "techused":"Node.js, Express, Handlebars, HTML and CSS", "gitlink":"https://github.com/dascormallorn/assignment_express_portfolio", "imagelink":"portfolio1.png"},
{"id":"facebook", "name":"Facebook", "desc":"building some Facebook pages from scratch", "techused":"HTML and CSS", "gitlink":"https://github.com/dascormallorn/project_prep_facebook_pages", "imagelink":"facebook.png"},
{"id":"music-player", "name":"Music Player", "desc":"ushering in the reign", "techused":"JavaScript, jQuery, HTML and CSS", "gitlink":"https://github.com/dascormallorn/assignment_royalty_free_music_player", "imagelink":"music-player.png"},
{"id":"event-emitter", "name":"Event Emitter", "desc":"listen and emit", "techused":"Node.js", "gitlink":"https://github.com/dascormallorn/assignment_async_nodejs", "imagelink":"emitter.png"},
{"id":"http-server", "name":"HTTP Server", "desc":"request and response", "techused":"Node.js with JSON", "gitlink":"https://github.com/dascormallorn/assignment_build_a_nodejs_server", "imagelink":"server.png"}];

module.exports.getAllProjects = function() {
	return myProjects;
};

module.exports.getOneProject = function(id) {
	for(var i=0; i<myProjects.length; i++) {
		if(myProjects[i].id === id) {
			return myProjects[i];
		};
	};
};
