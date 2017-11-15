const express = require('express')
const app = express()

app.set('view engine', 'hbs')

//middleware
app.use(function (req, res, next) {
    console.log(req.url + " — " + new Date())
    next()
})


app.get('/', function (req, res) {
    res.render('hello', {
        name: "Edwin"
    })
})

app.get('/person/:personName', function (req, res) {
    const personName = req.params.personName;
    res.render('hello', {
        name: personName
    });
})

app.listen(3000, function () {
    console.log('listening')
})
