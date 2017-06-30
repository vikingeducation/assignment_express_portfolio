class Project {
	constructor(name, link, img, description, ...technologies) {
		this.name = name;
		this.link = link;
		this.img = img;
		this.description = description
		this.technologies = technologies;
	}
}

const projects = [
	new Project(
		'Musical Mash', 
		'https://github.com/bsoung/musical-mash', 
		'http://i.imgur.com/3weQOn9.png', 
		'description',
		'Node', 'Express', 'React', 'Redux'),

	new Project(
		'Casts', 
		'https://github.com/bsoung/casts', 
		'http://i.imgur.com/VSx7o3C.png', 
		'description',
		'Node', 'Express', 'React', 'Redux'),

	new Project(
		'Inspiration', 
		'https://github.com/bsoung/scaling-enigma', 
		'http://i.imgur.com/GKbuXLl.png', 
		'description',
		'JQuery'),

	new Project(
		'Memories', 
		'https://github.com/bsoung/memories', 
		'http://i.imgur.com/H7Fwznh.png', 
		'description',
		'Node', 'Express', 'MongoDB', 'React', 'Redux')
]

module.exports = {
	Project,
	projects
}