var app = require('express')();

var port = process.env.PORT | 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
    res.json({ message:'look im the about page' });
});

/*
app.route('/contact')
    .get(function(req, res) {
        res.sendFile(__dirname+'/contact.html');
    })
    .post(function(req, res) {
        console.log(req.body);
        res.send("Hola "+ req.body.name);
    });
 */

app.get('/contact', function(req, res) {
    res.sendFile(__dirname+'/contact.html');
});

app.post('/contact', function(req, res) {
    console.log(req.body);
    res.send("Hola "+ req.body.name);
});

app.get('/:username', function(req, res) {
    console.log(req.params);
    res.send('You are ' + req.params.username);
});

//start
app.listen(port, function() {
    console.log('App listening on http://localhost:'+port);
});