var express = require('express');
var router = express.Router();
var {Pokemon, monsters} = require('../models/pokemon')

const findPokemon = (name) => {
  return monsters.find(monster => name == monster.name)
}

/* GET home page. */
router.get('/:name', function(req, res, next) {
  const monster = findPokemon(req.params.name)
  res.render('pokemon', { monster: monster })
});

module.exports = router;
