const express = require('express');
const router = express.Router();
const {projects} = require('../models/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio', projects: projects });
});


module.exports = router;
