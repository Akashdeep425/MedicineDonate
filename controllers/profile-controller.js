var path = require("path");
var umodel = require(path.join(
  __dirname,
  "..",
  "schemas",
  "profile-schema.js"
));
var usermodel = umodel();
var doSave = async (req, resp) => {
  if (req.files == null) req.body.idpic = "nopic.png";
  else {
    req.body.idpic = req.files.file.name;
    var fullPath = path.join(
      __dirname,
      "..",
      "reactfront",
      "public",
      "uploads",
      req.body.idpic
    );

    await req.files.file.mv(fullPath, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("File moved...");
      }
    });
  }
  //----------
  await usermodel.create(req.body, (err, result) => {
    if (err) {
      resp.send(err);
      return;
    }
    resp.set("json");
    resp.json({ msg: "Profile Saved" });
  });
};

var doUpdate = (req, resp) => {
  usermodel
    .update(
      { uid: req.body.uid },
      {
        $set: {
          name: req.body.name,
          mobile: req.body.mobile,
          address: req.body.address,
          city: req.body.city,
        },
      }
    )
    .then(function (result) {
      console.log(result);
      if (result.nModified != 0) resp.json({ msg: "Updated" });
      else resp.json({ msg: "Invalid id" });
    });
};

var doFetch = (req, resp) => {
  usermodel
    .find({ uid: req.body.uid })
    .then((result) => {
      console.log(result.length + " Records Found");
      // console.log(result);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ errmsg: err });
    });
};
var updateWithImg = async (req, resp) => {
  if (req.files == null) req.body.idpic = "nopic.png";
  else {
    req.body.idpic = req.files.file.name;
    var fullPath = path.join(
      __dirname,
      "..",
      "reactfront",
      "public",
      "uploads",
      req.body.idpic
    );

    await req.files.file.mv(fullPath, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("File moved...");
      }
    });
  }
  usermodel
    .update({ uid: req.body.uid }, { $set: req.body })
    .then(function (result) {
      console.log(result);
      if (result.nModified != 0) resp.json({ msg: "Updated" });
      else resp.json({ msg: "Invalid id" });
    });
};

var details = (req, resp) => {
  usermodel
    .find({ uid: req.query.uid })
    .then((result) => {
      console.log(result.length + " Records Found");
      // console.log(result);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ errmsg: err });
    });
};

module.exports = { doSave, doUpdate, doFetch, updateWithImg, details };
