let express = require("express");

let app = express();

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendfile(__dirname + "/app/public/home.html");
  });

  app.get("/survey", (req, res) => {
    res.sendfile(__dirname + "/app/public/survey.html");
  });
};
