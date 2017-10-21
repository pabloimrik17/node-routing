var app = require('express')();

var port = process.env.PORT | 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

// APPLY MIDDLEWARE TO ALL ROUTES
// app.use(authenticate);

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

app.get('/profile/:username', checkName, function(req, res) {
    res.send('You are ' + req.params.username);
});

// 404
app.use(function(req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.sendFile(__dirname + '/404.html');
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: '404 Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('404 Not found');

});

function checkName(req, res, next) {
    console.log(req.params);

    // check data

    next();
}

function authenticate(req, res ,next) {
    // check auth
    // req.params.token

    console.log('auth');
}

//start
app.listen(port, function() {
    console.log('App listening on http://localhost:'+port);
});