let express = require("express");
let path = require("path");
let routes = require("./app/routing/apiRoutes");
let html = require("./app/routing/htmlRoutes");

let app = express();

let PORT = process.env.PORT || 8080;

routes.routing(app);
html(app);
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
