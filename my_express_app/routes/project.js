const express = require('express');
const router = express.Router();

var projects = require('../models/projects').projects;
//var Project = require('../models/projects').Project;

function findProject(name){
  return projects.find(function(pjt){
    return name === pjt.name;
  });
}

router.get('/:name', function(req, res, next){
  var project = findProject(req.params.name);
  res.render('project', {project:project});
});

module.exports = router;

////

// const {God, gods} = require('../models/gods')
//
// const findGod = (name) => {
//   return gods.find(god => name == god.name)
// }
//
// /* GET home page. */
// router.get('/:name', function(req, res, next) {
//   const god = findGod(req.params.name)
//   res.render('god', { god: god })
// });


////

  // var gods = require('../models/gods').gods
  // var God = require('../models/gods').God
  //
  // function findGod(name) {
  //   return gods.find(function(god) {
  //     return name == god.name
  //   })
  // }
  //
  // /* GET home page. */
  // router.get('/:name', function(req, res, next) {
  //   var god = findGod(req.params.name)
  //   res.render('god', { god: god })
  // });
  //
  // module.exports = router
