import React from "react";
import PaymentForm from "./PaymentForm.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Input, Label} from 'reactstrap';
import "./SideBar.css";

const SideBar = () => {
  return (
    <div class = "sidebar">
        <Row><h2 className = "heading"><b>ORDER CYBERTRUCK</b></h2></Row>
        <Row>
        <Navbar className="navbar-dark bg-transparent nav">

              <Col xs = {12} className = "box">
              <NavbarBrand><b className = "names">Single Motor RWD</b></NavbarBrand>
              <b className = "price">$39,000</b>
              </Col>
              <Col xs = {12} className = "box">
              <NavbarBrand><b className = "names">Dual Motor AWD</b></NavbarBrand>
              <b className = "price">$49,000</b>
              </Col>
              <Col xs = {12} className = "box">
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
        <p className = "c">Fully refundable. You will be able to complete your configuration as production nears in late 2021. Tri Motor AWD production is expected in late 2021.</p>
        </Col>
        </Row>

        <Row className = "a">
        <Col xs = {12} className = "box_1">
        <b className = "e">Buy Now</b>
        </Col>
        </Row>

          <PaymentForm/>

    </div>
  );
}

export default SideBar;
