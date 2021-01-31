import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Modal,
  Table,
} from "react-bootstrap";
import DashNav from "./DashNav";
function SearchMed() {
  // var [fileobj, setfile] = useState("Aadhaar.png");
  var [cityAry, setCities] = useState([]);
  var [medAry, setMedicines] = useState([]);
  var [personAry, setPersons] = useState([]);
  var [Persondetails, setDetails] = useState([]);
  var picture;
  var [obj, setObj] = useState({
    city: "",
    medicine: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function detailsfxn(uid) {
    fetchdetails(uid);
    handleShow();
  }
  async function fetchdetails(uid) {
    var url = "/api/react/profile/fetch-details?uid=" + uid;
    var response = await axios.get(url);
    setDetails(response.data);
  }
  async function fetchpeople() {
    var city = document.getElementById("city").value;
    var med = document.getElementById("medicine").value;
    var url = "/api/react/medicine/fetchPeople/?city=" + city + "&name=" + med;
    var response = await axios.get(url);
    setPersons(response.data);
  }
  async function fetchCities() {
    var url = "/api/react/medicine/fetchCity";
    var response = await axios.post(url);
    setCities(response.data);
  }
  async function cityChange() {
    var city = document.getElementById("city").value;
    var url = "/api/react/medicine/fetchMed/?city=" + city;
    var response = await axios.get(url);
    setMedicines(response.data);
  }
  var doUpdate = (event) => {
    var { name, value } = event.target;
    setObj({
      ...obj,
      [name]: value,
    });
    if (name == "city") {
      cityChange();
    }
  };
  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <center>
      <DashNav></DashNav>
      <br></br>
      City
      <select id="city" name="city" value={obj.city} onChange={doUpdate}>
        <option value="none">--Select City--</option>
        {cityAry.map((obj) => {
          return <option value={obj}>{obj}</option>;
        })}
      </select>
      Medicines
      <select
        id="medicine"
        name="medicine"
        onChange={doUpdate}
        value={obj.medicine}
      >
        <option>--Medicines--</option>
        {medAry.map((obj) => {
          return <option value={obj.name}>{obj.name}</option>;
        })}
      </select>
      <br></br>
      <br></br>
      <br></br>
      <input
        type="button"
        value="Fetch Medicines"
        className="btn"
        style={{ width: "230px" }}
        onClick={fetchpeople}
      ></input>
      <br></br>
      <br></br>
      <Container className="mt-5">
        <Row>
          {personAry.map((obj) => {
            return (
              <Col md={3}>
                <Card>
                  <Card.Body>
                    <noscript>{(picture = "/uploads/" + obj.pic)}</noscript>
                    <Card.Img
                      variant="top"
                      className="mt-1"
                      src={picture}
                      height="200px"
                      width="16rem"
                    />
                    <Card.Title>Name : {obj.name}</Card.Title>
                    <Card.Text>
                      <p>Company : {obj.company}</p>
                      <p>Quantity : {obj.qty}</p>
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => detailsfxn(obj.uid)}
                    >
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <tbody>
              {Persondetails.map((obj) => {
                return (
                  <tr>
                    <td>{obj.name}</td>
                    <td>{obj.mobile}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </center>
  );
}

export default SearchMed;
