var express = require('express');
var router = express.Router();
var pokemon = require('../models/pokemon').pokemon;

function findPokemon ( name ) {
  return pokemon.find( pokemon => {
    return name == pokemon.name
  })
}

/* GET users listing. */
router.get('/:pokemon', function(req, res, next) {
  // res.send('respond with a resource');
  var pokemon = findPokemon(req.name.pokemon)
  +  res.render('pokemon', { pokemon: pokemon })
});

module.exports = router;
