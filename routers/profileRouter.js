var express = require("express");

var app = express.Router();

var path = require("path");

var controller = require(path.join(
  __dirname,
  "..",
  "controllers",
  "profile-controller.js"
));

app.post("/save", controller.doSave);

app.post("/update", controller.doUpdate);

app.post("/update-img", controller.updateWithImg);

app.post("/fetch", controller.doFetch);

app.get("/fetch-details", controller.details);

module.exports = app;
