const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('hello', { name: "Viking",name2: "robojack" })
})
app.get('/jack', function (req, res) {
  res.render('jackGame', { name: "robojack",name2: "robojack" })
})
app.get('/ratscrew', function (req, res) {
  res.render('Ratscrew', { name: "ratscrew",name2: "ratscrew" })
})
app.listen(port, function () {
  console.log('Odin is listening on port 3000!')
})
