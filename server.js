var app = require('express')();

var port = process.env.PORT | 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

// APPLY MIDDLEWARE TO ALL ROUTES
// app.use(authenticate);

// routes
var router = require('./app/route');
app.use(router);

//start
app.listen(port, function() {
    console.log('App listening on http://localhost:'+port);
});