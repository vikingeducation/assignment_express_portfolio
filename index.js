const express = require('express')
const app = express()
const path = require('path')


app.use('/images', express.static(path.join(__dirname + '/images')));
app.use('/Styles', express.static(path.join(__dirname + '/Styles')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(3000, function () {
  console.log("Portfolio Time")
})


const port = process.env.PORT || '3001'
app.listen(port)