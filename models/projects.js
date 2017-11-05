function  Project(name, technologies, github, heroku, image){
    this.name = name
    this.technologies = technologies
    this.github = github
    this.heroku = heroku
    this.image = image
    }
    

var projects = [
    new Project('Ukraine Short Visit Guide', 'bootstrap', 'https://github.com/eliashantula/elh200.github.io.git', 'https://quiet-cove-41555.herokuapp.com','../images/ukraine.png'),
    new Project('Royalty Free Music Player', 'Javascript, JQuery, HTML5 Audio', 'https://github.com/eliashantula/assignment_royalty_free_music_player.git', 'https://blooming-cliffs-48752.herokuapp.com','../images/rmplayer.png'),   
]

module.exports={
    Project,projects
}