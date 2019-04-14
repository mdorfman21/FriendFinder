let express = require("express");
let path = require("path");

let app = express();

module.exports = function(app) {
  app.get("/", (req, res) => {
    let reqPath = path.join(__dirname, "../public/home.html");
    res.sendFile(reqPath);
  });

  app.get("/survey", (req, res) => {
    let reqPath = path.join(__dirname, "../public/survey.html");
    res.sendFile(reqPath);
  });

  app.get("*", (req, res) => {
    let reqPath = path.join(__dirname, "../public/home.html");
    res.sendFile(reqPath);
  });
};
