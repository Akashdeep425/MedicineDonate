var express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var path = require("path");
app.use(bodyparser.json());
app.use(cors());
var userRouter = require("./routers/userRouter");
var profileRouter = require("./routers/profileRouter");
var medRouter = require("./routers/postMed-router");

const db = require("./config/dbconfig");
const dbConfig = db.url;
mongoose
  .connect(dbConfig)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "reactfront", "build")));

  app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "reactfront", "build", "index.html"));
  });
}
var fileupload = require("express-fileupload");
app.use(fileupload());

app.use(express.urlencoded({ extended: true }));

app.use("/api/react/usersignup", userRouter);

app.use("/api/react/profile", profileRouter);

app.use("/api/react/medicine", medRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server Started");
});
