var express = require('express');
var router = express.Router();
var pokemon = require('../models/pokemon').pokemon;

function findPokemon ( param ) {
  return pokemon.find( pokemon => {
    return param == pokemon.param
  })
}

/* GET users listing. */
router.get('/:pokemon', function(req, res, next) {
  // res.send('respond with a resource');
  var pokemon = findPokemon(req.params.pokemon)
  +  res.render('pokemon', { pokemon: pokemon })
});

module.exports = router;
