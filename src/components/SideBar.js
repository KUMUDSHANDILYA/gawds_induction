import React, {useState} from "react";
import PaymentForm from "./PaymentForm.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Input, Label} from 'reactstrap';
import "./SideBar.css";

const SideBar = ({index, setIndex}) => {

  const [classA, setClassA] = useState("lighter_name");
  const [classa, setClassa] = useState("lighter_price");
  const [classB, setClassB] = useState("darker_name");
  const [classb, setClassb] = useState("darker_price");
  const [classC, setClassC] = useState("darker_name");
  const [classc, setClassc] = useState("darker_price");
  const [addPrice, setAddPrice] = useState("+ FULL SELF DRIVING")
  const [display1, handleDisplay1] = useState(true);
  const [display2, handleDisplay2] = useState(false);
  const [description, setDescription] = useState("Fully refundable. You will be able to complete your configuration as production nears in late 2021. Single Motor RWD production is expected to begin in late 2022.");

  const function_ = (e) => {
    handleDisplay1(!display1);
    handleDisplay2(!display2);
  }

  const func_1 = (e) => {
    setIndex(0);
    setClassA("lighter_name");
    setClassa("lighter_price");
    setClassB("darker_name");
    setClassb("darker_price");
    setClassC("darker_name");
    setClassc("darker_price");
    setDescription("Fully refundable. You will be able to complete your configuration as production nears in late 2021. Single Motor RWD production is expected to begin in late 2022.");
  }

  const func_2 = (e) => {
    setIndex(1);
    setClassB("lighter_name");
    setClassb("lighter_price");
    setClassA("darker_name");
    setClassa("darker_price");
    setClassC("darker_name");
    setClassc("darker_price");
    setDescription("Fully refundable. You will be able to complete your configuration as production nears in late 2021. Dual Motor AWD production is expected in late 2021.");
  }

  const func_3 = (e) => {
    setIndex(2);
    setClassC("lighter_name");
    setClassc("lighter_price");
    setClassB("darker_name");
    setClassb("darker_price");
    setClassA("darker_name");
    setClassa("darker_price");
    setDescription("Fully refundable. You will be able to complete your configuration as production nears in late 2021. Tri Motor AWD production is expected in late 2021.");
  }

  const func_4 = (e) => {
    if(addPrice ==="+ FULL SELF DRIVING"){
      setAddPrice("FULL SELF DRIVE ADDED");
    }
    else {
      setAddPrice("+ FULL SELF DRIVING");
    }
  }

  return (
    <div class = "sidebar">
        <Row><h2 className = "heading"><b>ORDER CYBERTRUCK</b></h2></Row>
        <Row>
        <Navbar className="navbar-dark bg-transparent nav">

              <Col xs = {12} className = "box" onClick = {func_1}>
              <NavbarBrand><b className = {`${classA} h`}>SINGLE MOTOR RWD</b></NavbarBrand>
              <b className = {`${classa} h`}>$39,000</b>
              </Col>
              <Col xs = {12} className = "box" onClick = {func_2}>
              <NavbarBrand><b className ={`${classB} h`}>DUAL MOTOR AWD</b></NavbarBrand>
              <b className = {`${classb} h`}>$49,000</b>
              </Col>
              <Col xs = {12} className = "box" onClick = {func_3}>
              <NavbarBrand><b className = {`${classC} h`}>TRI MOTOR AWD</b></NavbarBrand>
              <b className = {`${classc} h`}>$69,000</b>
              </Col>
        </Navbar>
        </Row>
        <Container>
        <Row className = "a">
        <Col xs = {12} className = "box">
        <b className = "self_d" onClick = {func_4}>{addPrice}</b>
        <b className = "price_d">$19,000</b>
        </Col>
        <Col xs = {12}>
        <p className = "c">Selecting Full Self-Driving today will secure your price as it increases in the future</p>
        </Col>
        </Row>
        </Container>

        <Row className = "a">
        <Col xs = {12} className = "box_">
        <b className = "b">DUE TODAY</b>
        <b className = "price">$100</b>
        </Col>
        <Col xs = {12} className = "_marg">
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
