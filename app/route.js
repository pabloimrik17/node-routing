var express = require('express');
var router = express.Router();
var path = require('path');

module.exports = router;

//routes

router.get('/', showHome);
router.get('/about', showAbout);
router.get('/contact', showContact);
router.post('/contact', postContact);
router.get('/profile/:username', showProfile);
router.use(show404);

function showHome(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
}

function showAbout(req, res) {
    res.json({message: 'look im the about page'});
}

function showContact(req, res) {
    res.sendFile(path.join(__dirname, '../contact.html'));
}

function showProfile(req, res) {
    console.log(req.body);
    res.send("Hola " + req.body.name);
}

function postContact(req, res) {
    res.send('You are ' + req.params.username);
}

// 404
function show404(req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '../404.html'));
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({error: '404 Not found'});
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('404 Not found');
}