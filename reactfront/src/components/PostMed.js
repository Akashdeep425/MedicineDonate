import React, { useState, useEffect } from "react";
import axios from "axios";
import DashNav from "./DashNav";
function PostMed() {
  useEffect(() => {
    doFetch();
  }, []);
  const us = JSON.parse(window.localStorage.getItem("user"));
  var [fileobj, setfile] = useState("medicine.svg");
  var [userObj, setUserObj] = useState({
    uid: us.uidd,
    name: "",
    date: "",
    company: "",
    city: "",
    qty: "",
    units: "",
    file: null,
  });
  var doUpdate = (event) => {
    var { name, value } = event.target;
    setUserObj({
      ...userObj,
      [name]: value,
    });
  };
  async function onPicChange(event) {
    await setUserObj({ ...userObj, ["file"]: event.target.files[0] });
    setfile(URL.createObjectURL(event.target.files[0]));
  }
  async function doSave() {
    var url2 = "/api/react/medicine/save";
    //----------
    var formData = new FormData();
    for (var x in userObj) {
      formData.append(x, userObj[x]);
    }
    //--------
    var response2 = await axios.post(url2, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    await alert(JSON.stringify(response2.data.msg));
  }
  async function doFetch() {
    var url = "/api/react/profile/fetch";
    var response = await axios.post(url, userObj);
    if (response.data.length == 0) {
      alert("Profile data not found");
      return;
    }
    var { city } = response.data[0];
    await setUserObj({ ...userObj, ["city"]: city });
  }

  return (
    <>
      <DashNav></DashNav>
      <div class="wrapper">
        <div class="title">Post Medicine</div>
        <div class="form">
          <div class="inputfield">
            <label>User Id</label>
            <input
              type="text"
              name="uid"
              value={userObj.uid}
              readOnly
              class="input"
            ></input>
          </div>
          <div class="inputfield">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userObj.name}
              onChange={doUpdate}
              class="input"
            ></input>
          </div>
          <div class="inputfield">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={userObj.company}
              onChange={doUpdate}
              class="input"
            ></input>
          </div>
          <div class="inputfield">
            <label>Quantity</label>
            <input
              type="text"
              name="qty"
              value={userObj.qty}
              onChange={doUpdate}
              class="input"
            ></input>
          </div>
          <div class="inputfield">
            <label>Units</label>
            <input
              type="text"
              name="units"
              value={userObj.units}
              onChange={doUpdate}
              class="input"
            ></input>
          </div>
          <div class="inputfield">
            <label>Expiry Date</label>
            <input
              type="date"
              name="date"
              value={userObj.date}
              onChange={doUpdate}
            ></input>
          </div>
          <div class="inputfield">
            <label>Identification Proof</label>
            <input type="file" name="file" onChange={onPicChange}></input>
          </div>
          <div class="inputfield">
            <img src={fileobj} height="150px" width="200px"></img>
          </div>
          <div class="inputfield">
            <input
              type="button"
              value="Save"
              onClick={doSave}
              class="btn"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostMed;
