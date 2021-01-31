import React, { useState } from "react";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import axios from "axios";

function Navbarr() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  var [userObj, setUserObj] = useState({
    uid: "",
    pwd: "",
  });
  var doUpdate = (event) => {
    var { name, value } = event.target;
    setUserObj({
      ...userObj,
      [name]: value,
    });
  };
  var [responseMsg, setResponse] = useState("*");

  async function doSignup() {
    var url = "/api/react/usersignup/signup";
    var response = await axios.post(url, userObj);
    await alert(JSON.stringify(response.data));
    setUserObj({ uid: "", pwd: "" });
  }

  async function doLogin() {
    var url = "/api/react/usersignup/login";
    var response = await axios.post(url, userObj);

    var res = JSON.stringify(response.data.msg);
    var n = res.length;
    var msg = res.substring(1, n - 1);

    if (msg == "login successfull") {
      const user = { uidd: userObj.uid };
      window.localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/dashboard";

      setUserObj({ uid: "", pwd: "" });
    }
  }

  return (
    <div>
      <Navbar style={{ background: "#515AE0" }} expand="xl">
        <Navbar.Brand style={{ color: "white" }} href="#home">
          BootStrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" exact style={{ color: "white" }}>
              Home
            </Nav.Link>
          </Nav>
          <Button onClick={handleShow}>Signup</Button>
          <Button onClick={handleShow1}>Login</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ background: "#515AE0" }} closeButton>
          <Modal.Title>
            <h2 className="title mt-1">Sign up</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <img src="imgs/register.svg" height="100px" width="100px"></img>
          </center>
          <form action="#" className="sign-up-form">
            <div className="input-field">
              <input
                type="text"
                name="uid"
                value={userObj.uid}
                onChange={doUpdate}
                placeholder="Username"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="pwd"
                value={userObj.pwd}
                onChange={doUpdate}
                placeholder="Password"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <input
            type="button"
            className="btn"
            onClick={doSignup}
            value="Sign up"
          />
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header style={{ background: "#515AE0" }} closeButton>
          <Modal.Title>
            <h2 className="title mt-1">Login</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <img src="imgs/log.svg" height="100px" width="100px"></img>
          </center>

          <form action="#" className="sign-up-form">
            <div className="input-field">
              <input
                type="text"
                name="uid"
                value={userObj.uid}
                onChange={doUpdate}
                placeholder="Username"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="pwd"
                value={userObj.pwd}
                onChange={doUpdate}
                placeholder="Password"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {responseMsg}
          <input
            type="button"
            className="btn"
            onClick={doLogin}
            value="Login"
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbarr;
