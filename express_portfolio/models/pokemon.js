function Pokemon(name, number, img, type, species) {
  this.name = name
  this.number = number
  this.img = img
  this.type = type
  this.species = species
}

var monsters = [
  new Pokemon("Venusaur", "003", "https://img.pokemondb.net/artwork/venusaur.jpg", "Grass/Poison", "Seed Pokémon" ),
  new Pokemon("Charizard", "006", "https://img.pokemondb.net/artwork/charizard.jpg", "Fire/Flying", "Flame Pokémon"),
  new Pokemon("Blastoise", "009", "https://img.pokemondb.net/artwork/blastoise.jpg", "Water", "Shellfish Pokémon"),
  new Pokemon("Gengar", "094", "https://img.pokemondb.net/artwork/gengar.jpg", "Ghost/Poison", "Shadow Pokémon"),
  new Pokemon("Gyarados", "130", "https://img.pokemondb.net/artwork/gyarados.jpg", "Water/Flying", "	Atrocious Pokémon")
]

// console.log("monsters", monsters);

module.exports = {
  Pokemon,
  monsters
}
