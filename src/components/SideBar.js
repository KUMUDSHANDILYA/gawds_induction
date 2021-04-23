import React, {useState} from "react";
import PaymentForm from "./PaymentForm.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Input, Label} from 'reactstrap';
import "./SideBar.css";

const SideBar = ({index, setIndex}) => {

  const [display1, handleDisplay1] = useState(true);
  const [display2, handleDisplay2] = useState(false);
  const [description, setDescription] = useState("Fully refundable. You will be able to complete your configuration as production nears in late 2021. Single Motor RWD production is expected to begin in late 2022.");

  const function_ = (e) => {
    handleDisplay1(!display1);
    handleDisplay2(!display2);
  }

  const func_1 = (e) => {
    setIndex(0);
    setDescription("Fully refundable. You will be able to complete your configuration as production nears in late 2021. Single Motor RWD production is expected to begin in late 2022.");
  }

  const func_2 = (e) => {
    setIndex(1);
    setDescription("Fully refundable. You will be able to complete your configuration as production nears in late 2021. Dual Motor AWD production is expected in late 2021.");
  }

  const func_3 = (e) => {
    setIndex(2);
    setDescription("Fully refundable. You will be able to complete your configuration as production nears in late 2021. Tri Motor AWD production is expected in late 2021.");
  }


  return (
    <div class = "sidebar">
        <Row><h2 className = "heading"><b>ORDER CYBERTRUCK</b></h2></Row>
        <Row>
        <Navbar className="navbar-dark bg-transparent nav">

              <Col xs = {12} className = "box" onClick = {func_1}>
              <NavbarBrand><b className = "names">Single Motor RWD</b></NavbarBrand>
              <b className = "price">$39,000</b>
              </Col>
              <Col xs = {12} className = "box" onClick = {func_2}>
              <NavbarBrand><b className = "names">Dual Motor AWD</b></NavbarBrand>
              <b className = "price">$49,000</b>
              </Col>
              <Col xs = {12} className = "box" onClick = {func_3}>
              <NavbarBrand><b className = "names">TRI Motor AWD</b></NavbarBrand>
              <b className = "price">$69,000</b>
              </Col>
        </Navbar>
        </Row>

        <Row className = "a">
        <Col xs = {12} className = "box">
        <span className = "b">Full Self Driving</span>
        <b className = "price">$19,000</b>
        </Col>
        <Col xs = {12}>
        <p className = "c">Selecting Full Self-Driving today will secure your price as it increases in the future</p>
        </Col>
        </Row>

        <Row className = "a">
        <Col xs = {12} className = "box_">
        <b className = "b">Due Today</b>
        <b className = "price">$100</b>
        </Col>
        <Col xs = {12}>
        <p className = "c">{description}</p>
        </Col>
        </Row>

        {display1 && <Row className = "a">
        <Col xs = {12} className = "box_1" onClick = {function_}>
        <b className = "e">Buy Now</b>
        </Col>
        </Row>}

          {display2 && <PaymentForm id = "payment"/>}

    </div>
  );
}

export default SideBar;
