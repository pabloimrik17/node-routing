module.exports = {
    showDashboard: showDashboard
};


function showDashboard(req, res) {
    res.send("Im the dashboard");
}