import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./BottomBar.css";

const BottomBar = () => {
  return(
    <Container>
    <Row>
    <Col xs = {{span: 4}} sm = {{span: 3, offset: 2}}>
      <p className = "x"><b>250+MI</b></p>
      <p className = "y">RANGE (EPA EST.)</p>
      </Col>
      <Col xs = {{span: 4}} sm = {{span: 3}}>
        <p className = "x"><b>7,500+lbs</b></p>
        <p className = "y">TOWING CAPACITY</p>
        </Col>
        <Col xs = {{span: 4}} sm = {{span: 2}}>
          <p className = "x"><b> &#60; 6.5s</b></p>
          <p className = "y">0-60 MPH</p>
          </Col>
    </Row>
    </Container>
  );
}

export default BottomBar;
