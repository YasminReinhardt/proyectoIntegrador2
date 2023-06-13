var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//cookie const 
var cookieParser = require('cookie-parser');
//session const 
const session= require ('express-session')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productosRouter= require ('./routes/productos') //conectamos la ruta de productos

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/productos', productosRouter); //donde nos debe llevar cuando se pone productos en la pagina

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//session use
app.use (session({
  secret: "Nuestro mensaje secreto",
  resave: false,
  saveUninitialized: true }))

app.use(function(req, res, next){ 
 if(req.session.user !== undefined){
      res.locals.usuarioLogueado = true,
      res.locals.user = req.session.user

   } else {
      res.locals.usuarioLogueado = false
      res.locals.user = undefined

    }
       return next()
 })
 
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
