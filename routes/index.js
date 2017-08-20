var express = require('express');

var router = express.Router();
const { projectData } = require("../models/projectData");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projectData: 'projectData' });
});

module.exports = router;
