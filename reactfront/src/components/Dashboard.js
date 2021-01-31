import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Dashboard() {
  const us = JSON.parse(window.localStorage.getItem("user"));

  var [jsonAry, fillJsonArray] = useState([{ uid: "Aman" }]);
  async function fetchAll() {
    var url = "/api/react/medicine/fetch-all";
    var response = await axios.post(url, us);
    fillJsonArray(response.data);
  }
  function profile() {
    window.location.href = "/profile-form";
  }
  function search() {
    window.location.href = "/searchmed";
  }
  function postMed() {
    window.location.href = "/post-med";
  }
  async function deletefxn(id) {
    // alert(id);
    //http://localhost:8000
    var url = "/api/react/medicine/delete?_id=" + id;
    var response = await axios.get(url);
    fetchAll();
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function openModal() {
    fetchAll();
    handleShow();
  }
  function logout() {
    window.localStorage.href = "/home";
    window.localStorage.clear();
  }
  useEffect(() => {
    if (window.localStorage.getItem("user") == null) {
      window.location.href = "/home";
    }
  }, []);
  return (
    <>
      <div>
        <Container className="mt-3">
          <Row className="mt-2">
            <Col className="cd" md={3} style={{ margin: "auto" }}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  className="mt-1"
                  src="imgs/avatar.svg"
                  height="200px"
                  width="16rem"
                />
                <Card.Body>
                  <Card.Title>Profile Form</Card.Title>
                  <Card.Text>Save and Update your profile</Card.Text>
                  <center>
                    <Button variant="primary" onClick={profile}>
                      Profile
                    </Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>
            <Col className="cd" md={3} style={{ margin: "auto" }}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  className="mt-1"
                  src="imgs/post-med.svg"
                  height="200px"
                  width="16rem"
                />
                <Card.Body>
                  <Card.Title>Donate Medicine</Card.Title>
                  <Card.Text>Donate unused and extra Medicines</Card.Text>
                  <center>
                    <Button variant="primary" onClick={postMed}>
                      Donate
                    </Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>
            <Col className="cd" md={3} style={{ margin: "auto" }}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  className="mt-1"
                  src="imgs/get-med.svg"
                  height="200px"
                  width="16rem"
                />
                <Card.Body>
                  <Card.Title>Search</Card.Title>
                  <Card.Text>Search for Medicines for your need</Card.Text>
                  <center>
                    <Button variant="primary" onClick={search}>
                      Search
                    </Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>
            <Col className="cd" md={3} style={{ margin: "auto" }}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  className="mt-1"
                  src="imgs/manager.svg"
                  height="200px"
                  width="16rem"
                />
                <Card.Body>
                  <Card.Title>Medicine Manager</Card.Title>
                  <Card.Text>Manage your donated medicines</Card.Text>
                  <center>
                    <Button variant="primary" onClick={openModal}>
                      Manage
                    </Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="cd" md={3} style={{ margin: "auto" }}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  className="mt-1"
                  src="imgs/logout.svg"
                  height="200px"
                  width="16rem"
                />
                <Card.Body>
                  <Card.Title>Logout</Card.Title>
                  <Card.Text></Card.Text>
                  <center>
                    <Button variant="primary" onClick={logout}>
                      Logout
                    </Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Medicines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered size="sm">
            <thead>
              <tr style={{ background: "#1f2027", color: "white" }}>
                <th>Medicine</th>
                <th>Company</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jsonAry.map((obj) => {
                return (
                  <tr>
                    <td>{obj.name}</td>
                    <td>{obj.company}</td>
                    <td>
                      <center>
                        <Button onClick={() => deletefxn(obj._id)}>
                          Delete
                        </Button>
                      </center>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Dashboard;
