const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = 3100
const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:27017");



mongoose.Promise = global.Promise;


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.listen(3100);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/star_sign', indexRouter);
app.use('/api/v1/users', usersRouter);


// Handling errors
app.use((req, res, next) => {
  const error = new Error('Not Foud');
  error.status = 404;
  next(error)
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
