var express=require("express");

var app=express.Router();

var path=require("path");

var controller=require(path.join(__dirname,"..","controllers","user-controller.js"))

app.post("/signup",controller.doSignup)

app.post("/login",controller.doLogin)

module.exports=app;