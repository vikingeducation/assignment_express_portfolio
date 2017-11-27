
var express = require("express")
var router = express.Router()
var data = require("./data")

router.get('/:name', function( req, res ){
	let matchName = function(item){
		let name = req.params.name
		return item.link === name
	},
	current = data.find(matchName) 
	res.render('users', { object: current, object2: data})
})

module.exports = router
