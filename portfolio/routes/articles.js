var express = require("express")
var router = express.Router()
var data = require("./data")


router.get('/', function( req, res ){
	res.render('articles', {projects: data})
})


module.exports = router