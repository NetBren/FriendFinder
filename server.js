// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);