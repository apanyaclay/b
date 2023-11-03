var createError = require('http-errors');
const express = require('express')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detailRouter = require('./routes/detail');
var movieRouter = require('./routes/api/movie');

const app = express()
const PORT = 4000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/detail', detailRouter);
app.use('/api/movie', movieRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app