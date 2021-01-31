var path = require("path");
var umodel = require(path.join(
  __dirname,
  "..",
  "schemas",
  "postMed-schema.js"
));
var usermodel = umodel();
var doSave = async (req, resp) => {
  if (req.files == null) req.body.pic = "nopic.png";
  else {
    req.body.pic = req.files.file.name;
    var fullPath = path.join(
      __dirname,
      "..",
      "reactfront",
      "public",
      "uploads",
      req.body.pic
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
    resp.json({ msg: "Data Saved" });
  });
};
var doFetchAll = async (req, resp) => {
  console.log(req.body);
  usermodel
    .find({ uid: req.body.uidd })
    .then((result) => {
      console.log(result);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ errmsg: err });
    });
};
var doDelete = async (req, resp) => {
  console.log(req.query);
  usermodel.remove({ _id: req.query._id }).then((result) => {
    console.log(result);
    if (result.deletedCount != 0) resp.json({ msg: "Deleted" });
    else resp.json({ msg: "Invalid id" });
  });
};
var fetchCity = async (req, resp) => {
  usermodel
    .distinct("city")
    .then((result) => {
      console.log(result);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ msg: err });
    });
};
var fetchMedicine = async (req, resp) => {
  console.log(req.query);
  usermodel
    .find({ city: req.query.city })
    .then((result) => {
      console.log(result);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ msg: err });
    });
};
var fetchPeople = async (req, resp) => {
  console.log(req.query);
  usermodel
    .find({ city: req.query.city, name: req.query.name })
    .then((result) => {
      console.log(result);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ msg: err });
    });
};
module.exports = {
  doSave,
  doFetchAll,
  doDelete,
  fetchCity,
  fetchMedicine,
  fetchPeople,
};
