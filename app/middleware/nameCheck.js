module.exports = function (req, res, next) {
    console.log("middleware");

    // check stuff

    // attach info to req
    req.user = {
        username: 'Pablo'
    };

    console.log(req.user);

    next();
};