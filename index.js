var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");
var errorhandler = require("errorhandler");
var compress = require("compression");
var marked = require("marked");
var trunc = require("lodash/string/trunc");

var app = express();

// set global variables
app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// to use markdown in templates
app.locals.marked = marked;
// to truncate strings
app.locals.trunc = trunc;

// load middlewares
app.use(compress());
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, "public"), {
  maxAge: 31557600000
}));

// load routes
app.use(require("./routes"));

// 404
app.use(function(req, res, next) {
  res.render("404");
});

// error handler
app.use(errorhandler());

// start express server.
app.listen(app.get("port"), function() {
  console.log("Express server listening on port %d in %s mode", app.get("port"), app.get("env"));
});

module.exports = app;
