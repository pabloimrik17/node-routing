var app = require('express')();

port = process.env.PORT | 8080;
morgan = require('morgan');

// configure
app.use(morgan('dev'));
//routes
app.get('/', function(req, res) {
    res.send('look im the app');
});

//start
app.listen(port, function() {
    console.log('App listening on http://localhost:'+port);
});