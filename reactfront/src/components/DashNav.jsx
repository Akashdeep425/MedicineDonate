import React from "react";
import { Navbar, Button } from "react-bootstrap";

function dashboard() {
  window.location.href = "/dashboard";
}
function logout() {
  window.localStorage.clear();
  window.location.href = "/";
}

function DashNav() {
  return (
    <div>
      <Navbar style={{ background: "#515AE0" }} expand="xl">
        <Navbar.Brand style={{ color: "white" }} href="#home">
          BootStrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="dash">
            <Button onClick={dashboard}>DashBoard</Button>
            <Button onClick={logout}>Logout</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default DashNav;
