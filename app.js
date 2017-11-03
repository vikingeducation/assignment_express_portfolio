var express = require('express')
var app = express();
var project = require('./routes/project')
const port = process.env.PORT || '3000'

app.set('view engine', 'hbs')

var index = require('./routes/index')


app.use('/', index)
app.use('/projects',project)

app.listen(port)
