const path = require("path");

module.exports = function (app) {
    // two routes
    // "/survey" to display the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    // "home.html" which displays the home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });


};