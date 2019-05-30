const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
const dogsRouter = require('./routes/dogs');
const officeRouter = require('./routes/office');
const sunnyRouter = require('./routes/sunny');
const ceosRouter = require('./routes/ceos');

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dogs', dogsRouter);
app.use('/office', officeRouter);
app.use('/sunny', sunnyRouter);
app.use('/ceos', ceosRouter);

module.exports = app;
