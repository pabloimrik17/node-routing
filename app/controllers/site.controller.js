var path = require('path');

module.exports = {
    showHome: showHome,
    showAbout: showAbout,
    showContact: showContact,
    showProfile: showProfile,
    postContact: postContact
};

function showHome(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
}

function showAbout(req, res) {
    res.json({message: 'look im the about page'});
}

function showContact(req, res) {
    res.sendFile(path.join(__dirname, '../../contact.html'));
}

function showProfile(req, res) {
    console.log(req.body);
    res.send("Hola " + req.body.name);
}

function postContact(req, res) {
    res.send('You are ' + req.params.username);
}