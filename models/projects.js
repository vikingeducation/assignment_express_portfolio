class Project {
	constructor(name, githubLink, liveLink, img, description, ...technologies) {
		this.name = name;
		this.githubLink = githubLink;
		this.liveLink = liveLink;
		this.img = img;
		this.description = description
		this.technologies = technologies;
	}
}

const projects = [
	new Project(
		'Musical Mash', 
		'https://github.com/bsoung/musical-mash',
		'https://musical-mash.herokuapp.com/',
		'http://i.imgur.com/3weQOn9.png', 
		'A React/Redux app that uses the Soundcloud and Youtube API to grab a random song/video pair for the user. The user will be able to discover a lot of interesting combinations!',
		'Node', 'Express', 'React', 'Redux'),

	new Project(
		'Casts', 
		'https://github.com/bsoung/casts', 
		'https://casts-bs.herokuapp.com/',
		'http://i.imgur.com/VSx7o3C.png', 
		'A React/Redux app that uses the iTunes API to give the user a sample of five podcasts depending on the user\'s search. This is meant to help expose the user to new podcasts.',
		'Node', 'Express', 'React', 'Redux'),

	new Project(
		'Inspiration', 
		'https://github.com/bsoung/scaling-enigma', 
		'https://bsoung.github.io/scaling-enigma/',
		'http://i.imgur.com/GKbuXLl.png', 
		'A very basic JQuery application that utilizes the Reddit API to display search results in a visually interesting way. It is an experiment into how we consume massive amounts of information.',
		'JQuery'),

	new Project(
		'Memories', 
		'https://github.com/bsoung/memories', 
		'https://memories-bs.herokuapp.com/',
		'http://i.imgur.com/H7Fwznh.png', 
		'A React/Redux app that uses the Google Maps API and Cloudinary image hosting to allow users to post a picture/comment combo depending on where they are geographically located. The posts will always be bound to that particular geolocation.',
		'Node', 'Express', 'MongoDB', 'React', 'Redux')
]

module.exports = {
	projects
}