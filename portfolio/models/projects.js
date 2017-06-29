class Project {
  constructor(name, technologies, gitHubLink, image, description){
    this.name = name,
    this.technologies = technologies,
    this.gitHubLink = gitHubLink,
    this.image = image,
    this.description = description
  }
}

const decide = "A project I made as a solution to a problem that my girlfriend and I have where we can never decide on a restaurant. This one pulls your location and pulls from Foursquare's API. There are different options that will update the request and return modified results"
const dominion = "A project I made when I was first learning to use jQuery and parse through JSON objects. It looks through the big list of possible cards and randomizes the results. Pretty simple stuff"
const whatHave = "A project made through Viking Code School. It pulls data from the Congress Sunlight API and returns your legislators based on zip code. It also includes the legislators recent voting record."

const projects = [
  new Project('decide-for-me', ['Ruby on Rails', 'Jquery'], 'https://github.com/gregfilipczak/decide-for-me', '../images/decide-for-me.png', decide),
  new Project('Dominion deck randomizer', 'jQuery', 'https://github.com/gregfilipczak/dominion-deck-randomizer', '../images/dominion.png', dominion),
  new Project('What Have You Done', 'Node', 'https://github.com/gregfilipczak/project_what_have_you_done', '../images/what-have-you-done.png', whatHave)
]

module.exports = {
  Project,
  projects
}
