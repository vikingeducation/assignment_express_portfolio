var express = require('express');
var router = express.Router();
var {Pokemon, monsters} = require('../models/pokemon')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { monsters: monsters });
});

module.exports = router;
