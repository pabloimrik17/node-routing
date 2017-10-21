var express = require('express');
var router = express.Router();
var path = require('path');

module.exports = router;

//routes

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname , '../index.html'));
});

router.get('/about', function(req, res) {
    res.json({ message:'look im the about page' });
});

/*
router.route('/contact')
    .get(function(req, res) {
        res.sendFile(__dirname+'/contact.html');
    })
    .post(function(req, res) {
        console.log(req.body);
        res.send("Hola "+ req.body.name);
    });
 */

router.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '../contact.html'));
});

router.post('/contact', function(req, res) {
    console.log(req.body);
    res.send("Hola "+ req.body.name);
});

router.get('/profile/:username', function(req, res) {
    res.send('You are ' + req.params.username);
});

// 404
router.use(function(req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname , '../404.html'));
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