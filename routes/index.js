var express = require('express');
var router = express.Router();
const { projects } = require('../models/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Benjamin Soung\'s Portfolio', projects: projects });
});

module.exports = router;
