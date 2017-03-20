var express = require('express');
var router = express.Router();

const {codeProjects} = require('../modules/codeProjects');

router.get('/', function(req, res, next) {
  res.render('code/index', { title: "Blackwright",
                       projects: codeProjects });
});

module.exports = router;
