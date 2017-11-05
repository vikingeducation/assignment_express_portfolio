var express = require('express');
var path = require('path');


var index = require('./routes/index');
var users = require('./routes/users');
var proj1 = require('./routes/project')


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/', index);
app.use('/projects', proj1);
app.use('/users', users);
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use('/stylesheets',express.static(path.join(__dirname, 'stylesheets')))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'devopenelopment' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || '3000'
app.listen(port);

module.exports = app;