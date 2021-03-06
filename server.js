var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

require('./models/db');
const stocksController = require('./controllers/stocksController');

var index = require('./routes/index');
var news = require('./routes/news');

var port = 3000;

var app = express();
app.use(cookieParser());

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder (To save Angular 2 files)
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'css')))
// Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/news', news);
app.use('/stock', stocksController);

app.get('*', function (req, res, next) {
  res.render('error.html');
})

app.listen(port, function(){
	console.log('Server started on port: ' + port);
});
