var app = require('express')();

port = process.env.PORT | 8080;
morgan = require('morgan');

// configure
app.use(morgan('dev'));
//routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
    res.json({ message:'look im the about page' });
});

app.get('/contact', function(req, res) {
    res.send('look im the contact page');
});

//start
app.listen(port, function() {
    console.log('App listening on http://localhost:'+port);
});