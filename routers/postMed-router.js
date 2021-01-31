var express = require("express");

var app = express.Router();

var path = require("path");

var controller = require(path.join(
  __dirname,
  "..",
  "controllers",
  "postmed-controller.js"
));

app.post("/save", controller.doSave);

app.post("/fetch-all", controller.doFetchAll);

app.get("/delete", controller.doDelete);

app.post("/fetchCity", controller.fetchCity);

app.get("/fetchMed", controller.fetchMedicine);

app.get("/fetchPeople", controller.fetchPeople);

module.exports = app;
