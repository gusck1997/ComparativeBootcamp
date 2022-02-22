var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var TaskRouter = require('./routes/task');


 
var app = express();


//Settings 
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(logger('dev'));
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/task',TaskRouter);


module.exports = app;

//Server listening 
app.listen(app.get('port'), ()=>{
    console.log('Server Listening on Port', app.get('port'));
})
