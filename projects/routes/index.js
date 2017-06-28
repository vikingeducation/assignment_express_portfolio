var express = require('express');
var router = express.Router();
const {God, gods} = require('../models/gods')

const findGod = (name) => {
  return gods.find(god => name == god.name)
}

/* GET home page. */
router.get('/:name', function(req, res, next) {
  const god = findGod(req.params.name)
  res.render('god', { god: god })
});

// Finally, we return the router so we can
// use it in our app.js
module.exports = router



// app.js
var express = require('express')

// And here we go, requiring our router
var index = require('./routes/index')

// ...

app.use('/', index)
