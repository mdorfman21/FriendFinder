let express = require("express");
let bodyParser = require("body-parser");

let app = express();

module.exports = function(app) {
  app.use(bodyParser.json());

  app.get("/api/friends", (req, res) => {
    res.send("nice");
  });

  app.post("/api/friends", (req, res) => {
    console.log(req.body);
  });
};
