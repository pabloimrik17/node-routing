var express = require('express');
var router = express.Router();
var path = require('path');
var siteController = require('./controllers/site.controller');
var dashboardController = require('./controllers/dashboard.controller');

module.exports = router;

// Site Routes
router.get('/', siteController.showHome);
router.get('/about', siteController.showAbout);
router.get('/contact', siteController.showContact);
router.post('/contact', siteController.postContact);
router.get('/profile/:username', siteController.showProfile);

// Dashboard Routes
router.get('/dashboard', dashboardController.showDashboard);

// API Routes

// 404
router.use(show404);

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