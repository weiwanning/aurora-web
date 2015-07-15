var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var xmlparser    = require('express-xml-bodyparser');
var errorHandler = require('./controllers/errorHandler.js');
var routes       = require('./routes.js');
var app          = express();

app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(xmlparser());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../public')));

app.use(routes);
app.use(errorHandler);
  
module.exports = app