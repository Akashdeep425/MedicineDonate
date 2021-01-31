import React, { useState } from "react";
import "./css/profile-style.css";
import axios from "axios";
import DashNav from "./DashNav";

function ProfileForm() {
  const us = JSON.parse(window.localStorage.getItem("user"));
  var [fileobj, setfile] = useState("Aadhaar.png");
  var [userObj, setUserObj] = useState({
    uid: us.uidd,
    name: "",
    mobile: "",
    address: "",
    city: "",
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
    var url = "/api/react/profile/save";
    //----------
    var formData = new FormData();
    for (var x in userObj) {
      formData.append(x, userObj[x]);
    }
    //--------
    var response = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    await alert(JSON.stringify(response.data.msg));
  }
  async function doFetch() {
    var url = "/api/react/profile/fetch";
    var response = await axios.post(url, userObj);
    if (response.data.length == 0) {
      alert("no data found");
      return;
    }
    var { uid, name, mobile, address, city, idpic } = response.data[0];

    setUserObj({
      uid: uid,
      name: name,
      mobile: mobile,
      address: address,
      city: city,
      file: null,
    });
    setfile(`uploads/${idpic}`);
  }
  async function doUpdatedata() {
    if (userObj.file == null) {
      var url = "/api/react/profile/update";

      var response = await axios.post(url, userObj);
      alert(JSON.stringify(response.data));
    } else {
      var url2 = "http://localhost:8000/profile/update-img";
      //----------
      var formData = new FormData();
      for (var x in userObj) {
        formData.append(x, userObj[x]);
      }
      //--------
      var response2 = await axios.post(url2, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await alert(JSON.stringify(response2.data));
    }
  }
  return (
    <>
      <DashNav></DashNav>
      <div class="wrapper">
        <div class="title">Profile Form</div>
        <div class="form">
          <div class="inputfield">
            <label>User Id</label>
            <input
              type="text"
              name="uid"
              value={userObj.uid}
              readOnly
              class="input input-uid"
            ></input>
            <input
              type="button"
              onClick={doFetch}
              value="Fetch"
              class="btn btn-fetch"
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
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={userObj.mobile}
              onChange={doUpdate}
              class="input"
            ></input>
          </div>
          <div class="inputfield">
            <label>Address</label>
            <textarea
              class="textarea"
              name="address"
              value={userObj.address}
              onChange={doUpdate}
            ></textarea>
          </div>
          <div class="inputfield">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={userObj.city}
              onChange={doUpdate}
              class="input"
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
              onClick={doSave}
              value="Save"
              class="btn"
            ></input>
            <input
              type="button"
              value="Update"
              onClick={doUpdatedata}
              class="btn"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileForm;
