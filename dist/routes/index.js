'use strict';

var express = require('express');
var router = express.Router();

var _require = require('../models/projects'),
    Project = _require.Project,
    projects = _require.projects;

/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', { projects: projects });
});

module.exports = router;
//# sourceMappingURL=index.js.map