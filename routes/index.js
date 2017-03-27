var express = require('express');
var router = express.Router();
const {Project, projects} = require('../models/projects');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { projects: projects });
});

module.exports = router;
