var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var knex = require('knex');

var index = require('./routes/index');
var users = require('./routes/users');
var city = require('./routes/city');

var app = express();

// const db = knex({
//   client: "mysql",
//   connection: {
//     host: "127.0.0.1",
//     user: "node",
//     password: "node" ,
//     database: "world"
//   }
// })
// app
// .get("/", (req, res) => {
//   db("country").then((country) => {
//     res.send(country)
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// })
//   .get("/country", (req, res) => {
//     db("country").then((country) => {
//       res.send(country)
//     })
//     .catch((err) => {
//       res.send(err)
//     })
//   })
//   .get("/country", (req, res) => {
//     db("country").then((country) => {
//       res.send(country)
//     })
//     .catch((err) => {
//       res.send(err)
//     })
//   })
//   .get("/country", (req, res) => {
//     db("country").then((country) => {
//       res.send(country)
//     })
//     .catch((err) => {
//       res.send(err)
//     })
//   })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/city', city);

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
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
